import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"

import { useSearchObject, useSearchResult, SearchResultUpdate } from "@/Store/SearchStore";
import Default_logo from "../../assets/Logo/Logo-96.png";
import { Filter, Frown, Heart, Plane, PlaneLanding, PlaneTakeoff, SearchSlash, X } from "lucide-react";
import axios from "axios";
import moment from "moment";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const FlightSearch = () => {
// navigate and location 
const {pathname} = useLocation()
const navigate = useNavigate()
    // Get the search result and search object state from the store
    const searchResult = useSearchResult();
    const searchObject = useSearchObject();
    const [loading, setLoading] = useState(false);

    // State for slider price range filter
    const [priceRange, setPriceRange] = useState([0, 5000]);

    // Handle slider change
    const handleSliderChange = (value) => {
        setPriceRange(value);
    };

    // State for sorting by devotion time
    const [sortByTime, setSortByTime] = useState(false);

    // Handle sort by time change
    const handleSortByTime = (e) => {
        setSortByTime(e);
        console.log(e, "hi");
    }

    // State for responsive filter hide and show
    const [showFilter, setShowFilter] = useState(false);  // default is false

    // Handle filter toggle
    const handleFilterToggle = () => {
        setShowFilter(prev => !prev);
    }

    // Filter the flight data based on the search object
    const filterFlights = (data, criteria) => {
        return data?.filter((flight) => {
            const routes = flight?.flight_group[0]?.routes;
            if (!routes || routes.length === 0) return false;

            // Check if any route in the flight matches any criteria segment
            return routes.some(route => 
                criteria?.segment?.some(segment => 
                    route.origin === segment.departure_airport &&
                    route.destination === segment.arrival_airport &&
                    route.flight_date === segment.departure_date
                )
            );
        });
    };

// fetch the flight data from the json file and filter the data based on the search object
// and update the search result state with the final filtered flights

// Importent Note: 

 // the json file u provide me is complicated  . but i think i can filter the data based on the search object
 // for handle this type of data i need to Collaborate and concern with the backend developer by there api documentation and response data , 
 // this type of data handle by quarry the api and get the data based on the search object but in this case i have a json file so that i filter the data based on the search object this is the only option . 
 // the eatch data of json have same price but routes are deffarent , , i data have more then 1 routes , 
 // first i thought i show only the first route elemet as a departure and last route element as a arrival but i think its not a good idea but dont do that  because then the time of the journey is too long more the 34 hourse , i think thats not good , thats why i filter and map over the all segment and route to get every possible way , so this type of confution i need to discuss with the backend developer and get the proper data and proper way to handle the data 
 // by the way , right now i am doing this as a possible way that i have to handel that json file data . 
 // i think the each data of the json file is a flight data and the flight data has a flight group and the flight group has a routes 
 // so its not a result but a flight data so i filter the data based on the search object and return the filtered data , 
 // and add the propertise of departure and arrival route and journey duration time , and then i filter the duplicate data based on the flight key and price , and then i filter the data based on the price range , and then i sort the data based on the devotion time , and then i update the search result state with the final filtered flights


 // the json data is not real time , its only 101 object of json , the routs are limited ,   
 // for check u can use date 29 nov  or 30 nov  , its have some data , route is ((( new delhi to bangkok ))) ((Dhaka to bangkok )) ((Dhaka to new delhi ))  ( ( dhaka to Kunming Changshui International Airport at 29 nov)) ((dhaka to Kuala Lumpur International Airport at 29 nav))  ((dhaka to Singapore Changi Airport at 29 nav)) so those are available in the json file ,
 


    useEffect(() => {
        const fetchAndFilterFlights = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/flight_search_result.json");
                const filteredFlights = filterFlights(response.data, searchObject);



                // Map the filtered flights to add departure and arrival routes
                const newResult = filteredFlights.map((item) => {
                    const Departure_Route = item.flight_group[0].routes.find(route => route.origin === searchObject.segment[0].departure_airport);
                    const Arrival_Route = item.flight_group[0].routes.find(route => route.destination === searchObject.segment[0].arrival_airport);

                    const departure_time = new Date(Departure_Route.departure_time);
                    const arrival_time = new Date(Arrival_Route.arrival_time);

                    const Journey_duration_time = arrival_time - departure_time;

                    return {
                        ...item,
                        departure_route: Departure_Route,
                        arrival_route: Arrival_Route,
                        Journey_duration_time
                    };
                });

                // Filter out duplicate flight data based on flight key and price
                const duplicateFilter = newResult.filter((item, index, full) => {
                    const match = full.find(i => i.flight_key === item.flight_key && i.price.total === item.price.total);
                    return match === item;
                });

                // Apply the price range filter to the duplicate-free flights
                let finalResult = duplicateFilter.filter((flight) => {
                    return flight.price.total >= priceRange[0] && flight.price.total <= priceRange[1];
                });

                if (sortByTime) {
                    // Sort finalResult by devotion time
                    finalResult = finalResult.sort((a, b) => {
                        const departureA = a.Journey_duration_time;
                        const departureB = b.Journey_duration_time;
                        return departureA - departureB;
                    });
                }

                // Update the search result state with the final filtered flights
                SearchResultUpdate(finalResult);

            } catch (error) {
                console.error("Error fetching flight data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndFilterFlights();

    }, [searchObject, priceRange, sortByTime]);  // Dependency array includes both searchObject and priceRange














    return (
        <div className="max-w-[1232px] mx-auto grid grid-cols-12 gap-4 mb-10 ">


{/* // mobile filter button */}

            <span onClick={handleFilterToggle} className={`w-10 h-10 p-1 bg-green-800 transition-all  duration-300 ease-linear  fixed top-20 left-0 border-y border-white  rounded-r-full ${showFilter ? "hidden" : "flex "} lg:hidden  justify-center items-center `}>
                <Filter className="text-white relative right-1" />
            </span>


            {/* Filter sidebar */}


            <div className={`w-[50vw] max-w-72 fixed top-0 transition-all  duration-300 ease-linear ${showFilter ? "left-0": "left-[-100vw]"}  h-screen bg-green-500 z-50 lg:hidden`}>
                <span onClick={handleFilterToggle} className="h-8 w-8 p-1 flex justify-center items-center  text-white bg-green-800 absolute  right-0 top-0">
                    <X size={20} className="" />
                </span>


{/* mobile filter card  */}

                <Card className=" shadow-md rounded-lg   py-10 md:px-2 lg:sticky left-0 top-4 h-screen overflow-y-scroll">
                    <CardHeader className="p-2">
                        <CardTitle className="text-sm p-0">Filters</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 p-2">
                        <div className="mb-4">
                            <h3 className="font-medium text-xs md:text-sm mb-2">Price Range</h3>
                            <Slider
                                range
                                min={0}
                                className="text-green-800"
                                max={10000}
                                step={100}
                                value={priceRange}
                                onChange={handleSliderChange}
                                trackStyle={[{ backgroundColor: 'black' , height: '5px' }, { backgroundColor: 'black' , height: '15px' }]}
                                handleStyle={[
                                    { backgroundColor: 'green', borderColor: 'black'  , boxShadow: '0 0 0 0' ,width: '15px', height: '15px', marginLeft: '0px', marginTop: '-8px' }, 
                                    { backgroundColor: 'green', borderColor: 'black'  , boxShadow: '0 0 0 0' ,width: '15px', height: '15px', marginLeft: '0px', marginTop: '-8px' }, 
                                ]}
                            />
                            <div className="flex justify-between mt-2 text-sm">
                                <span className="text-xs">${priceRange[0].toFixed(2)}</span>
                                <span className="text-xs">${priceRange[1].toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Checkbox
                                checked={sortByTime}
                                onCheckedChange={handleSortByTime}
                                className="text-green-800"
                                id="terms"
                            />
                            <label
                                htmlFor="terms"
                                className="md:text-sm text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Sort by Devotion Time
                            </label>
                        </div>
                        <div className={` ${pathname ==="/" ? " hidden  " : ""} flex gap-2 w-full mt-2  lg:bg-black/10 hover:bg-green-500/20  rounded-lg relative  py-2   text-xs justify-start items-center  `} onClick={()=>{
                    navigate("/")
                      }}>
                    <SearchSlash size="20" className="" />

                      Modify search


                    </div>
                    </CardContent>
                </Card>
            </div>



            {/* Desktop Filter sidebar */}
            {
              searchObject.segment.length !==0 &&  <Card className="col-span-3 border-green-900/20 shadow-sm rounded-lg hidden lg:block  lg:sticky left-0 top-4 h-96 overflow-y-scroll">
              <CardHeader>
                  <CardTitle className="mont">Filters</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="mb-4">
                      <h3 className="font-medium mb-2">Price Range</h3>
                      <Slider
                          range
                          min={0}
                          className="text-green-800"
                          max={10000}
                          step={100}
                          value={priceRange}
                          onChange={handleSliderChange}
                          trackStyle={[{ backgroundColor: 'black' , height: '5px' }, { backgroundColor: 'black' , height: '15px' }]}
                          handleStyle={[
                              { backgroundColor: 'green', borderColor: 'black'  , boxShadow: '0 0 0 0' ,width: '20px', height: '20px', marginLeft: '-10px', marginTop: '-8px' }, 
                              { backgroundColor: 'green', borderColor: 'black'  , boxShadow: '0 0 0 0' ,width: '20px', height: '20px', marginLeft: '-10px', marginTop: '-8px' }, 
                          ]}
                      />
                      <div className="flex justify-between mt-2 text-sm">
                          <span>${priceRange[0].toFixed(2)}</span>
                          <span>${priceRange[1].toFixed(2)}</span>
                      </div>
                  </div>

                  <div className="flex gap-5">
                      <Checkbox
                          checked={sortByTime}
                          onCheckedChange={handleSortByTime}
                          className="text-green-800"
                          id="terms"
                      />
                      <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                          Sort by Devotion Time
                      </label>
                  </div>
                  {/* <div className={` ${pathname ==="/" ? " hidden  " : ""} flex gap-2 w-full mt-5  lg:bg-black/10 hover:bg-green-500/20  rounded-lg relative top-2 py-2 px-3   `} onClick={()=>{
                  navigate("/")
                    }}>
                  <SearchSlash className="" />

                    Modify search


                  </div> */}
              </CardContent>
          </Card>


            }
           


     {/* map the search result to show the flight data */}
     {
                searchObject.segment.length ===0 && (
                  <div className="flex w-full  col-span-12 flex-col items-center justify-center h-full opacity-50">
                    <img src={Default_logo} alt="Default Logo" className="w-24 h-24 mb-4" />
                    <h1 className="text-2xl font-bold text-gray-700">Welcome to Flight Golobe</h1>
                    <p className="text-gray-500 mt-2">Explore your journey with us</p>
                  </div>
                ) 
                }


            {/* Flight Results show component */}
            <div className=" col-span-12 lg:col-span-9 relative">
                {loading === false && searchObject.segment.length !==0 && searchResult.length === 0 ?  <div className="text-center  w-full flex justify-center items-center col-span-12 flex-col gap-2 mt-20 opacity-50">

                  <Frown size="50" className="" />
                  
                  No Flights Found</div> : null}

           
{
 searchResult.length !== 0 &&    searchObject.segment.length !==0  &&  <div className=" w-full  flex  items-center -top-5">
  <span className="rounded-md text-xs self-end py-1 px-4    border-b border-b-green-600 underline-offset-4">
    Total: {searchResult.length}


</span>
</div>
}




                {searchResult.map((item, index) => {
                    const departure = item.departure_route;
                    const arrival = item.arrival_route;
// convert the time to date object
                    const departure_time = new Date(departure.departure_time);
                    const arrival_time = new Date(arrival.arrival_time);
// calculate the journey duration
                    const differenceInMs = arrival_time - departure_time;
                    const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
                    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
                    const journey_duration = `${hours}h ${minutes}m`;

                    return (
                        <Fade key={index} className="flex justify-between items-start  min-h-56">
                            <div className="flex items-start w-full  ">
                                {/* <img src={Default_logo} alt="Airline Logo" className="w-12 h-12" /> */}
                                <Card className="w-full m mx-auto my-4 shadow-lg  ">
                                    <CardHeader className="p-4 border-b w-full ">
                                        <CardTitle className="flex justify-between items-center text-lg font-bold">
                                            <span className="text-green-700 mont">{item.price.total} {item.price.currency}</span>
                                            <span className="text-sm text-gray-500 ">{journey_duration}</span>
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 mt-1 text-sm">
                                            {departure?.operating?.carrier_name}: {item?.flight_key}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex flex-col md:flex-row gap-4 p-4">
                                        <div className="w-full md:w-1/2 border border-gray-900 rounded-sm p-4 bg-gray-50 hover:bg-slate-100 transition-all hover:shadow-md">
                                            <h3 className="font-semibold text-gray-800 flex justify-between">
                                              <span className="flex gap-2 items-center">  <span>
                                              Departure
                                              </span>  <PlaneTakeoff size={15} />
                                             
                                                
                                                </span>
                                                
                                                
                                                 <span className="text-xs mont">{departure.origin_airport.city}</span> </h3>
                                            <p className="text-gray-700 text-sm">{departure?.origin_airport.name}</p>
                                            <h3 className="font-semibold mt-2 text-gray-800 text-xs">Departure Time</h3>
                                            <p className="text-gray-700 mont">{ moment(departure_time).format('MMMM Do YYYY, h:mm a')  }</p>
                                        </div>
                                        <div className="w-full md:w-1/2 border border-gray-900 rounded-sm p-4 bg-gray-50 hover:bg-slate-100 transition-all  hover:shadow-md">
                                            <h3 className="font-semibold text-gray-800 flex justify-between">
                                              
                                            <span className="flex gap-2 items-center">  <span>
                                              Arrival
                                              </span>  <PlaneLanding size={15} />
                                             
                                                
                                                </span>
                                              
                                              
                                              <span className="text-xs mont">{departure.destination_airport.city}</span> </h3>
                                            <p className="text-gray-700 text-sm ">{arrival?.destination_airport?.name}</p>
                                            <h3 className="font-semibold mt-2 text-gray-800 text-xs">Arrival Time</h3>
                                            <p className="text-gray-700">{  moment(arrival_time).format('MMMM Do YYYY, h:mm a')}</p>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="p-4 flex gap-4 items-center">
                                        <Heart size={32} className="border-green-800 rounded-md border p-2 text-green-700 hover:bg-green-100" />
                                        <Button className="w-full bg-green-800  transition-all active:scale-95 text-white font-semibold rounded-md py-2 hover:bg-green-700 flex justify-center  items-center">
                                        <Plane />
                                          <span>
                                          
                                          View Details
                                          </span>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Fade>
                    );
                })}
            </div>
        </div>
    );
};

export default FlightSearch;