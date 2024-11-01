import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { AirportStore } from '@/Store/AirportsStore';
import { MultiCityStore, multiSearchAirPortsUpdate, multiSearchTextUpdate, updateMultiSegment, useMultiSearchAirports, useMultiSearchText } from '@/Store/MultiCityStore';
import  { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
const MultiArrival = ({UniqueId}) => {


    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Get airports from AirportStore
  const airports = AirportStore.useState((s) => s.airports);

//   // Get search text and searched airports from MultiCityStore

const multi_Search_text = useMultiSearchText();

const multiSearchAirPorts = useMultiSearchAirports();

// 

const multiDeptureAirport = MultiCityStore.useState(s=>s.Segment.find((item)=> item.id === UniqueId)?.departure_airport )
const multiArrivalAirport = MultiCityStore.useState(s=>s.Segment.find((item)=> item.id === UniqueId)?.arrival_airport )





 // Render airports after search and initial airport
 const renderAirports = useMemo(()=>multiSearchAirPorts?.length > 0 ? multiSearchAirPorts : airports?.slice(0, 6),[multiSearchAirPorts,airports]);
  // Remove selected arrival airport from the list

  
  const finalRender = useMemo(()=>renderAirports.filter((item) => item?.code !==  multiDeptureAirport?.code),[renderAirports, multiDeptureAirport]);
 









  useEffect(() => {
   

    const timeOut = setTimeout(() => {
      if (multi_Search_text.length > 1) {
      

        const newSearchAirports = airports.filter(airport =>
          new RegExp(`\\b${multi_Search_text}`, 'i').test(airport?.search_contents)
        );

        multiSearchAirPortsUpdate(newSearchAirports);
      }
    }, 500);

    return () => clearTimeout(timeOut);
  }, [multi_Search_text,airports]);


  // Set the departure airport onClick
  const setArrivalAirport = useCallback((value) => {
    
    updateMultiSegment(UniqueId,"arrival_airport",value);
    setIsPopoverOpen(false);
  },[UniqueId]);


   // Handle input value change
   const handleInputChange = useCallback((e) => {
   
    multiSearchTextUpdate(e.target.value);
  },[]);






const renderedItems = useMemo(()=>{
   return finalRender.map((item) => (
        <div
          onClick={() => { setArrivalAirport(item); }}
          className="flex justify-between items-center p-3 border-b text-sm hover:bg-gray-100 transition duration-200"
          key={item?.code}
        >
          <div className="flex-1">
            <div className="font-medium">{item?.city_name} - {item?.country_name}</div>
            <div className="text-xs text-gray-500">{item?.airport_name}</div>
          </div>
          <div className="text-sm font-medium text-gray-700">{item?.code}</div>
        </div>
      ))

},[finalRender,setArrivalAirport])











    return (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} className="w-full">
        <PopoverTrigger asChild>
          <div className="md:p-2 p-4 w-full md:w-full border bg-white/90 border-black">
            {/* Render city and country */}
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">
  Form - {multiArrivalAirport && multiArrivalAirport?.search_contents ? multiArrivalAirport.search_contents.split("-").slice(2, 3).join(" ") : ""}
</Label>

            <div className="overflow-x-auto max-w-96">
              {/* Render code and airport name */}
              <Label className="text-base md:!text-[1.5vw] lg:!text-base text-nowrap" htmlFor="email">
                { multiArrivalAirport && multiArrivalAirport?.search_contents ? multiArrivalAirport.search_contents.split("-").slice(0, 2).join(" "):"Select the Going to Airport"}
              </Label>
            </div>
          </div>
        </PopoverTrigger>
        
        <PopoverContent side="bottom" className="w-96 md:w-72 lg:w-96" asChild>
          <div className="border border-gray-300 w-full max-w-md mx-auto">
            <Input
              onChange={handleInputChange}
              placeholder="Airport code, city, name or country"
              className="w-full p-2 !ring-0 text-sm focus:!outline-none focus:!ring-0 active:!ring-0 active:!border-none !outline-none"
            />
            <div className="max-h-60 overflow-y-scroll scroll-m-4 pr-4">
            {renderedItems}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
};





export default MultiArrival;




MultiArrival.propTypes = {
    UniqueId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};