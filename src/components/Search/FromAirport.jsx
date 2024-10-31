
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../ui/popover"
  import { Input } from "@/components/ui/input"
import { Label } from "../ui/label";
import { AirportStore } from "@/Store/AirportsStore";
import { DepartureAirportUpdate, FromSearchAirportsUpdate, FromSearchTextUpdate,  SelectedAirportStore,  ToSearchAirportsUpdate,  useArrivalAirport,  useDepartureAirport,  useFromSearchAirports,  useFromSearchText } from "@/Store/SelectedAirportStore";
import { useEffect, useState } from "react";


const FromAirport = () => {

    // state for popover close 

    const [isPopoverOpen,setIsPopoverOpen] = useState(false)

    const airports = AirportStore.useState(s=>s.airports) ;
    const form_search_text = useFromSearchText() ;
const SearchedAirport = useFromSearchAirports();
//  get araival and depture airport = useDepartureAirport()

const departureAirport = useDepartureAirport() ;
const arrivalAirport = useArrivalAirport()
// render airport after search and initial airport 

const renderAirports = SearchedAirport.length > 0 ? SearchedAirport : airports.slice(0, 6)  ; 
// remove selected to airport 

const finalRender = renderAirports.filter((item)=> item.code !== arrivalAirport.code)



// useing useEffect to search for airport
// when user type on input field 
// useing timeout for delay the search and prevent the api call on every key press 
// if user type 3 character then search for airport .its help performance 
// clear the timeout on every key press for memory management 

useEffect(()=>{

    const timeOut = setTimeout(()=>{
        if(form_search_text.length > 1){
            console.log('searching for airport' , form_search_text) 
          

            const newSearchAirports = airports.filter(airport => new RegExp(`\\b${form_search_text}`, 'i').test(airport.search_contents));

            FromSearchAirportsUpdate(newSearchAirports) ;
        }

    },500)




return ()=> clearTimeout(timeOut); 

},[form_search_text])




// set the departure airport onClick  
const setDepartureAirport = (item)=>{
    
    DepartureAirportUpdate(item) ; 
    setIsPopoverOpen(false)

}



    
// handle on value change 
const handleInputChange = (e)=>{
  

    FromSearchTextUpdate(e.target.value) ;


  
}








    return (

        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}  className="w-full    ">
  <PopoverTrigger asChild>


  <div className="md:p-2 p-4   w-full md:w-full  border border-black">
    {/* render city and country  */}
            <Label className="text-xs md:text-[1.1vw] lg:text-xs  block text-slate-900/70" htmlFor="email">Form - {departureAirport.search_contents.split("-").slice(2,3).join(" ")}</Label>
         <div className="overflow-x-auto max-w-96">
            {/* // render code and pairport name */}
         <Label className="text-base md:!text-[1.5vw] lg:!text-base  text-nowrap " htmlFor="email">{departureAirport.search_contents.split("-").slice(0,2).join(" ")} </Label>
         </div>
      
      
            </div>
  </PopoverTrigger>
  <PopoverContent side="bottom"  className=" w-96 md:w-72 lg:w-96" asChild>

  <div className="border border-gray-300 w-full max-w-md mx-auto">
  <Input 
  onChange={handleInputChange}
    placeholder="Airport code, city, name or country"
    className="w-full p-2 !ring-0 text-sm  focus:!outline-none focus:!ring-0 active:!ring-0 active:!border-none 
    !outline-none " 
  />
  
  <div className="max-h-60 overflow-y-scroll  scroll-m-4 pr-4 ">
    { 
    
    
    finalRender.map((item, index) => {
        
        
     return   (
            <div 
            onClick={()=>{setDepartureAirport(item)}}
              className="flex justify-between items-center p-3 border-b text-sm hover:bg-gray-100 transition duration-200" 
              key={index}
            >
              <div className="flex-1">
                <div className="font-medium">{item.city_name} - {item.country_name}</div>
                <div className="text-xs text-gray-500">{item.airport_name}</div>
              </div>
              <div className="text-sm font-medium text-gray-700">{item.code}</div>
            </div>
          )
    })
    
    
    }
  </div>
</div>


   


  </PopoverContent>
</Popover>

       
    );
};

export default FromAirport;

