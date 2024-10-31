import { BaggageOptionUpdate, BookingClassUpdate, NonStopFlightUpdate, SearchStore, useBaggageOption, useBookingClass, useJourneyType, useNonStopFlight, usePreferredCarrier,  } from '@/Store/SearchStore';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import PassengerSelectComponent from './PassengerSelectComponent';
import { Button } from '../ui/button';
import { useTravelerAdult, useTravelers_child, useTravelers_child_ages, useTravelers_infant, useTravelers_infant_ages } from '@/Store/PassengerStore';
import { DepartureAirportTypeUpdate, useArrivalAirport, useDepartureAirport, useDepartureAirportType, useSelectedDepartureDate, useSelectedReturnDate } from '@/Store/SelectedAirportStore';
  

const CommonBottomBar = () => {
//import SearchStore for data 


const NonStopFlight = useNonStopFlight() ;
const BaggageOption = useBaggageOption() ;


// import state for handling search 

const journey_type = useJourneyType();

// segment state  

const departure_airport_type = useDepartureAirportType();

const departure_airport = useDepartureAirport().code;

const arrival_airport = useArrivalAirport().code;
const departure_date = useSelectedDepartureDate();
const return_date = useSelectedReturnDate();



const travelers_adult =  useTravelerAdult() ;
console.log(travelers_adult)
const travelers_child = useTravelers_child();
const travelers_child_age = useTravelers_child_ages();
const travelers_infants = useTravelers_infant();
const travelers_infants_age = useTravelers_infant_ages();
// what is the preferred carrier ?????? 
const preferred_carrier = usePreferredCarrier();
const non_stop_flight = useNonStopFlight();
const baggage_option = useBaggageOption();

const booking_class = useBookingClass();
// what is the supplier uid ??????
const supplier_uid = "all" ; 


const partner_id = "ftm_partner_id";
const language = "en"







//update the state of the booking class, non stop flight and baggage option
const handle_booking_class = (e)=>{
 
    BookingClassUpdate(e)
  
}
const handle_Non_Stop_Flight =(e)=>{
    NonStopFlightUpdate(e)
}


const handle_baggage_option = (e)=>{
    BaggageOptionUpdate(e)
}
const handle_departure_airport_type = (e)=>{
  DepartureAirportTypeUpdate(e)
}

// i am not not able to convert to that formate , thats why i use github copilate to convert the date to that formate
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};





const handleSearch = ()=>{
    console.log('searching for flight');
    const formattedDepartureDate = formatDate(departure_date) 
    const formattedReturnDate =  formatDate(return_date);

    const finalData = journey_type === "OneWay" ? {
      
        journey_type ,
        segment:[
          {
            departure_airport_type,
            departure_airport,
            arrival_airport_type : departure_airport_type , // give the same value 
            arrival_airport,
            departure_date : formattedDepartureDate
          }
          
  
        ],
        
        travelers_adult ,
        travelers_child,
        travelers_child_age ,
        travelers_infants,
        travelers_infants_age,
        preferred_carrier,
        non_stop_flight,
        baggage_option,
        booking_class,
        supplier_uid,
        partner_id,
        language,
        short_ref: "12121212121",
        
      }
     : 
      {
        journey_type ,
        segment:[
          {
            departure_airport_type,
            departure_airport,
            arrival_airport_type : departure_airport_type , // give the same value 
            arrival_airport,
            departure_date: formattedDepartureDate
          },
          {
            // one more segment option if its round trip 
            departure_airport_type,
            departure_airport : arrival_airport ,
            arrival_airport_type : departure_airport_type , // give the same value 
            arrival_airport : departure_airport,
            departure_date : formattedReturnDate 
          }
          
  
        ],
        travelers_adult ,
        travelers_child,
        travelers_child_age ,
        travelers_infants,
        travelers_infants_age,
        preferred_carrier,
        non_stop_flight,
        baggage_option,
        booking_class,
        supplier_uid,
        partner_id,
        language,
        short_ref: "12121212121",
     
        
      
    }


// so final data is going to console. 

// job task provaided final datatype is json so i console is a a Json body


const jsonData = JSON.stringify(finalData)
console.log(jsonData)

console.log(finalData) ;














}




    return (
      <>
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


      <Select defaultValue='Airport type' onValueChange={handle_departure_airport_type} >
  <SelectTrigger className="md:w-[180px] lg:!w-full">
    <SelectValue  placeholder='Airport type' >
{
  departure_airport_type
}
  
    </SelectValue>
  </SelectTrigger>
  <SelectContent className="mont">
    <SelectItem value="AIRPORT">Airport</SelectItem>
    <SelectItem value="CITY">City</SelectItem>
    
    
  </SelectContent>
</Select>
      
          
      
      </div>
      <Button onClick={handleSearch} className=" self-end  md:w-auto w-full mt-4  " >
      Search
  </Button></>
    );
};

export default CommonBottomBar;