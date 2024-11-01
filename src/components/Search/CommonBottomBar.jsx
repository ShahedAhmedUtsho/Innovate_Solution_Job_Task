import {
  BaggageOptionUpdate,
  BookingClassUpdate,
  NonStopFlightUpdate,
  useBaggageOption,
  useBookingClass,
  useJourneyType,
  useNonStopFlight,
  usePreferredCarrier,
} from "@/Store/SearchStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PassengerSelectComponent from "./PassengerSelectComponent";
import { Button } from "../ui/button";
import {
  useTravelerAdult,
  useTravelers_child,
  useTravelers_child_ages,
  useTravelers_infant,
  useTravelers_infant_ages,
} from "@/Store/PassengerStore";
import {
  DepartureAirportTypeUpdate,
  useArrivalAirport,
  useDepartureAirport,
  useDepartureAirportType,
  useSelectedDepartureDate,
  useSelectedReturnDate,
} from "@/Store/SelectedAirportStore";
import { useCallback } from "react";
import {  useMultiSegment } from "@/Store/MultiCityStore";
import { useToast } from "@/hooks/use-toast";







const CommonBottomBar = () => {

  const { toast } = useToast()
  //import SearchStore for data
// import multiCityStore 

const MultiSegment = useMultiSegment();
 

  // import state for handling search

  const journey_type = useJourneyType();

  // segment state

  const departure_airport_type = useDepartureAirportType();

  const departure_airport = useDepartureAirport().code;

  const arrival_airport = useArrivalAirport().code;
  const departure_date = useSelectedDepartureDate();
  const return_date = useSelectedReturnDate();

  const travelers_adult = useTravelerAdult();
 
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
  const supplier_uid = "all";

  const partner_id = "ftm_partner_id";
  const language = "en";

  //update the state of the booking class, non stop flight and baggage option
  const handle_booking_class =useCallback( (e) => {
    BookingClassUpdate(e);
  },[]);
  const handle_Non_Stop_Flight = useCallback((e) => {
    NonStopFlightUpdate(e);
  },[]);

  const handle_baggage_option = useCallback((e) => {
    BaggageOptionUpdate(e);
  },[]);
  const handle_departure_airport_type = useCallback((e) => {
    DepartureAirportTypeUpdate(e);
  },[]);

  // i am not not able to convert to that formate , thats why i use github copilate to convert the date to that formate
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSearch = useCallback(() => {
   
    const formattedDepartureDate = formatDate(departure_date);
    const formattedReturnDate = formatDate(return_date);

    let finalData;

switch (journey_type) {
  case "OneWay":
    finalData = {
      journey_type,
      segment: [
        {
          departure_airport_type,
          departure_airport,
          arrival_airport_type: departure_airport_type, // same value
          arrival_airport,
          departure_date: formattedDepartureDate,
        },
      ],
      travelers_adult,
      travelers_child,
      travelers_child_age,
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
    };
    break;

  case "RoundTrip":
    finalData = {
      journey_type,
      segment: [
        {
          departure_airport_type,
          departure_airport,
          arrival_airport_type: departure_airport_type, // same value
          arrival_airport,
          departure_date: formattedDepartureDate,
        },
        {
          // second segment for round trip
          departure_airport_type,
          departure_airport: arrival_airport,
          arrival_airport_type: departure_airport_type, // same value
          arrival_airport: departure_airport,
          departure_date: formattedReturnDate,
        },
      ],
      travelers_adult,
      travelers_child,
      travelers_child_age,
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
    };
    break;

  default:
    finalData = {

      journey_type,
      segment:   MultiSegment.map((item)=>{
        return {
          departure_airport_type,
          departure_airport: item?.departure_airport.code,
          arrival_airport_type: departure_airport_type, // same value
          arrival_airport: item?.arrival_airport.code,
          departure_date: formatDate(item?.departure_date) ,
        }
      })
      
      ,


      travelers_adult,
      travelers_child,
      travelers_child_age,
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





    }; // Optional: handle other journey types or default case
    break;
}




// Validate that segment values are not undefined or empty
const isValidSegment = (segment) => {
  return (
    segment.departure_airport_type &&
    segment.departure_airport &&
    segment.arrival_airport_type &&
    segment.arrival_airport &&
    segment.departure_date
  );
};

if (!finalData.segment.every(isValidSegment)) {
  console.error("Invalid segment data , fill the all Field", finalData.segment);
  toast({
    className: `text-white bg-red-500  max-h-18 gap-0  leading-0  !text-xs`,
    variant:  "error" ,
    duration: 1500,
    title: "  Error : incomplete values",
    description: "fill the values",
    
  })
  console.log( "some values are missing ! please fill the values");
  console.log( finalData);
return;


  
}


//show toast on submit

toast({
  className: `text-white bg-green-700 max-h-18 !text-xs`,
  variant:  "success" ,
  duration: 1500,
  title: " Successfully submitted",
  description: "Check the console for the data",
})


    // job task provaided final datatype is json so i console is a a Json body

    const jsonData = JSON.stringify(finalData);
    

    console.log(finalData);
  },[
    journey_type,
    departure_airport_type,
    departure_airport,
    arrival_airport,
    departure_date,
    return_date,
    travelers_adult,
    travelers_child,
    travelers_child_age,
    travelers_infants,
    travelers_infants_age,
    preferred_carrier,
    non_stop_flight,
    baggage_option,
    booking_class,
    supplier_uid,
    partner_id,
    language,
    MultiSegment,
    toast
  

  ])

  return (
    <>
      <div className="search_Bottom  w-full  flex md:flex-row flex-col gap-5 mont">
        <Select
          className="!w-full !bg-black"
          defaultValue="Economy"
          onValueChange={handle_booking_class}
        >
          <SelectTrigger className="md:w-[180px] lg:!w-full ">
            <SelectValue placeholder={booking_class}>
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

        <Select defaultValue="any" onValueChange={handle_Non_Stop_Flight}>
          <SelectTrigger className="md:w-[180px] lg:!w-full ">
            <SelectValue placeholder={non_stop_flight}>
              {non_stop_flight === "any" ? "any flight" : non_stop_flight}
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

        <Select defaultValue="Any" onValueChange={handle_baggage_option}>
          <SelectTrigger className="md:w-[180px] lg:!w-full">
            <SelectValue placeholder="any baggage">
              {baggage_option === "any" ? "any baggage" : "only baggage"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="mont">
            <SelectItem value="any">any baggage</SelectItem>
            <SelectItem value="only-baggage">only baggage</SelectItem>
          </SelectContent>
        </Select>

        <PassengerSelectComponent />

        <Select
          defaultValue="Airport type"
          onValueChange={handle_departure_airport_type}
        >
          <SelectTrigger className="md:w-[180px] lg:!w-full">
            <SelectValue placeholder="Airport type">
              {departure_airport_type}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="mont">
            <SelectItem value="AIRPORT">Airport</SelectItem>
            <SelectItem value="CITY">City</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={handleSearch}
        className=" self-end bg-green-700 hover:bg-green-800 hover:text-green-50  md:w-auto w-full mt-4  "
      >
        Search
      </Button>
    </>
  );
};

export default CommonBottomBar;
