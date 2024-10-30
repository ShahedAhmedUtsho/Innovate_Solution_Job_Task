import { BaggageOptionUpdate, BookingClassUpdate, NonStopFlightUpdate, SearchStore, useBaggageOption, useBookingClass, useJourneyType, useNonStopFlight,} from '@/Store/SearchStore';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import PassengerSelectComponent from './PassengerSelectComponent';
import { Button } from '../ui/button';
  

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
        <div className="search_Bottom  w-full  flex md:flex-row flex-col gap-5 mont">

            

<Select className="!w-full !bg-black" defaultValue='Economy' onValueChange={handle_booking_class} >
  <SelectTrigger className="md:w-[180px] lg:!w-full ">
    <SelectValue  placeholder={booking_class} >
        {booking_class}
    </SelectValue>
  </SelectTrigger>
  <SelectContent className="mont">
    <SelectItem value="Economy">Economy</SelectItem>
    <SelectItem value="Premium-Economy">Premium Economy</SelectItem>
    <SelectItem value="Business">Business</SelectItem>
    <SelectItem value="First-Class">First-Class</SelectItem>
  </SelectContent>
</Select>


<Select defaultValue='any' onValueChange={handle_Non_Stop_Flight} >
  <SelectTrigger className="md:w-[180px] lg:!w-full ">
    <SelectValue  placeholder={NonStopFlight} >
        {NonStopFlight === 'any' ? 'any flight' : NonStopFlight}
    </SelectValue>
  </SelectTrigger>
  <SelectContent className="mont">
    <SelectItem value="any">any</SelectItem>
    <SelectItem value="non-stop">non stop</SelectItem>
    <SelectItem value="one">one</SelectItem>
    <SelectItem value="two">two</SelectItem>
    <SelectItem value="three">three</SelectItem>
    
  </SelectContent>
</Select>

<Select defaultValue='Any' onValueChange={handle_baggage_option} >
  <SelectTrigger className="md:w-[180px] lg:!w-full">
    <SelectValue  placeholder='any baggage' >
        {BaggageOption === 'any' ? 'any baggage' : 'only baggage'}
    </SelectValue>
  </SelectTrigger>
  <SelectContent className="mont">
    <SelectItem value="any">any baggage</SelectItem>
    <SelectItem value="only-baggage">only baggage</SelectItem>
    
    
  </SelectContent>
</Select>

      
      <PassengerSelectComponent />

<Button className=" self-end  md:w-auto w-full " >
    Search
</Button>

      
          
      
      </div>
    );
};

export default CommonBottomBar;