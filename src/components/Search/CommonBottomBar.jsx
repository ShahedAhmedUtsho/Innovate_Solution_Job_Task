import { BaggageOptionUpdate, BookingClassUpdate, NonStopFlightUpdate, SearchStore, useBaggageOption, useBookingClass, useJourneyType, useNonStopFlight,} from '@/Store/SearchStore';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const CommonBottomBar = () => {
//import SearchStore for data 

const booking_class = useBookingClass() ;
const NonStopFlight = useNonStopFlight() ;
const BaggageOption = useBaggageOption() ;

const handle_booking_class = (e)=>{
 
    BookingClassUpdate(e)
  
}
const handle_Non_Stop_Flight =(e)=>{
    NonStopFlightUpdate(e)
}


const handle_baggage_option = (e)=>{
    BaggageOptionUpdate(e)
}







    return (
        <div className="search_Bottom h-10 w-full  flex gap-10">

            

<Select defaultValue='Economy' onValueChange={handle_booking_class} >
  <SelectTrigger className="w-[180px]">
    <SelectValue  placeholder={booking_class} >
        {booking_class}
    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Economy">Economy</SelectItem>
    <SelectItem value="Premium-Economy">Premium Economy</SelectItem>
    <SelectItem value="Business">Business</SelectItem>
    <SelectItem value="First-Class">First-Class</SelectItem>
  </SelectContent>
</Select>


<Select defaultValue='any' onValueChange={handle_Non_Stop_Flight} >
  <SelectTrigger className="w-[180px]">
    <SelectValue  placeholder={NonStopFlight} >
        {NonStopFlight === 'any' ? 'any flight' : NonStopFlight}
    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="any">any</SelectItem>
    <SelectItem value="non-stop">non stop</SelectItem>
    <SelectItem value="one">one</SelectItem>
    <SelectItem value="two">two</SelectItem>
    <SelectItem value="three">three</SelectItem>
    
  </SelectContent>
</Select>

<Select defaultValue='Any' onValueChange={handle_baggage_option} >
  <SelectTrigger className="w-[180px]">
    <SelectValue  placeholder='any baggage' >
        {BaggageOption === 'any' ? 'any baggage' : 'only baggage'}
    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="any">any baggage</SelectItem>
    <SelectItem value="only-baggage">only baggage</SelectItem>
    
    
  </SelectContent>
</Select>

      
      
          
      
      </div>
    );
};

export default CommonBottomBar;