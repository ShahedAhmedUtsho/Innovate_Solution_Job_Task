import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useSearchObject, useSearchResult, SearchResultUpdate } from "@/Store/SearchStore";
import Default_logo from "../../assets/Logo/Logo-96.png";
import { Heart } from "lucide-react";
import axios from "axios";
import moment from "moment";

const FlightSearch = () => {
    // get the search result and search object state from the store
  const searchResult = useSearchResult();
  const searchObject = useSearchObject();


// filter the flight data based on the search object 

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
  

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/flight_search_result.json");
        const filteredFlights = filterFlights(response.data, searchObject);

        // map the filtered flights to add departure and arrival routes
const newResult = filteredFlights.map((item,index)=>{
// get the departure and arrival route based on the search object segment
const Departure_Route = item.flight_group[0].routes.find(route=>route.origin === searchObject.segment[0].departure_airport);
const Arrival_Route = item.flight_group[0].routes.find(route=>route.destination === searchObject.segment[0].arrival_airport);







  




// return the flight data with departure and arrival route
    return {
        ...item,
        departure_route: Departure_Route,
        arrival_route: Arrival_Route
    }
})


// filter_unique_filter_code 

// filter the duplicate flight data based on the flight key and price total
const duplicateFilter =  newResult.filter((item,index,full)=>{

    const filter_unique_filter_code_Match  = full.find((i,index)=>{
        return  i.flight_key === item.flight_key && i.price.total === item.price.total

    })

   
    return filter_unique_filter_code_Match === item


})


// update the search result state with the filtered flight data

        SearchResultUpdate(duplicateFilter);
       
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    })();
  }, [searchObject]);








  return (
    <div className="max-w-[1232px] mx-auto grid grid-cols-12 gap-4">


{searchResult.length === 0 ? <div className="text-center mt-8 w-full flex justify-center items-center col-span-12">No Flights Found</div> : <>


    <Card className="col-span-3 shadow-md rounded-lg hidden lg:block  lg:sticky left-0 top-4 h-screen  ">

        
<CardHeader>
  <CardTitle>Filters</CardTitle>
</CardHeader>
<CardContent>
  <div className="mb-4">
    <h3 className="font-medium mb-2">Price</h3>
    <Slider defaultValue={[50]} max={1200} className="w-full" />
  </div>
  <div className="mb-4">
    <h3 className="font-medium mb-2">Departure Time</h3>
    <Slider defaultValue={[0]} max={24} className="w-full" />
  </div>
</CardContent>
</Card>

<div className=" col-span-12 lg:col-span-9">


{searchResult.map((item, index) => {
 



  const departure = item.departure_route;
  const arrival = item.arrival_route;
console.log("departure",departure)
console.log("arrival",arrival)
  const departure_time = new Date(departure.departure_time);
  const arrival_time = new Date(arrival.arrival_time);



  const differenceInMs = arrival_time - departure_time;
  const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
  const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
  const journey_duration = `${hours}h ${minutes}m`;


  return (
   
      <div key={index} className="flex justify-between items-start  min-h-56">
        <div className="flex items-start w-full  ">
          {/* <img src={Default_logo} alt="Airline Logo" className="w-12 h-12" /> */}
          <Card className="w-full m mx-auto my-4 shadow-lg ">
<CardHeader className="p-4 border-b w-full ">
<CardTitle className="flex justify-between items-center text-lg font-bold">
<span className="text-green-700">{item.price.total} {item.price.currency}</span>
<span className="text-sm text-gray-500">{journey_duration}</span>
</CardTitle>
<CardDescription className="text-gray-600 mt-1 text-sm">
{departure?.operating?.carrier_name}: {item?.flight_key}
</CardDescription>
</CardHeader>

<CardContent className="flex flex-col md:flex-row gap-4 p-4">
<div className="w-full md:w-1/2 border border-gray-900 rounded-sm p-4 bg-gray-50">
<h3 className="font-semibold text-gray-800 flex justify-between"><span>Departure</span> <span className="text-xs">{departure.origin_airport.city}</span> </h3>
<p className="text-gray-700 text-sm">{departure?.origin_airport.name}</p>
<h3 className="font-semibold mt-2 text-gray-800 text-xs">Departure Time</h3>
<p className="text-gray-700">{ moment(departure_time).format('MMMM Do YYYY, h:mm a')  }</p>
</div>
<div className="w-full md:w-1/2 border border-gray-900 rounded-sm p-4 bg-gray-50">
<h3 className="font-semibold text-gray-800 flex justify-between"><span>Arrival</span> <span className="text-xs">{departure.destination_airport.city}</span> </h3>

<p className="text-gray-700 text-sm">{arrival?.destination_airport?.name}</p>
<h3 className="font-semibold mt-2 text-gray-800 text-xs">Arrival Time</h3>
<p className="text-gray-700">{  moment(arrival_time).format('MMMM Do YYYY, h:mm a')}</p>
</div>
</CardContent>

<CardFooter className="p-4 flex gap-4 items-center">
<Heart size={32} className="border-green-800 rounded-full border p-2 text-green-700 hover:bg-green-100" />
<Button className="w-full bg-green-800 text-white font-semibold rounded-md py-2 hover:bg-green-700">
View Details
</Button>
</CardFooter>
</Card>

        </div>
      </div>
    
  );
})}
</div>
</> }

    </div>
  );
};

export default FlightSearch;
