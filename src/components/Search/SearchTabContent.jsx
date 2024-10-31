import { TabsContent } from '../ui/tabs';
import { ArrowRightLeft } from 'lucide-react';

import FromAirport from './FromAirport';
import ToAirport from './ToAirport';
import DeptureDate from './DeptureDate';
import ReturnDate from './ReturnDate';
import { ArrivalAirportUpdate, DepartureAirportUpdate, SelectedAirportStore } from '@/Store/SelectedAirportStore';
import { useEffect } from 'react';

const SearchTabContent = () => {
  // Get the current state of arrival and departure airports
  const arrivalAirport = SelectedAirportStore.useState(s => s.Arrival);
  const departureAirport = SelectedAirportStore.useState(s => s.Departure);

  // Function to alternate the values of arrival and departure airports
  const alternateValue = () => {
    console.log("hitting");
    console.log(arrivalAirport, departureAirport);

    ArrivalAirportUpdate({ ...departureAirport });
    DepartureAirportUpdate({ ...arrivalAirport });
  };

  // Log the current state of arrival and departure airports whenever they change
  useEffect(() => {
    console.log(arrivalAirport, "arrival");
    console.log(departureAirport, "departure");
  }, [arrivalAirport, departureAirport]);

  return (
    <div className="w-full h-full">
      {/* One Way Tab */}
      <TabsContent value="one_way" asChild>
        <div className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end">
          <FromAirport />
          <ArrowRightLeft onClick={alternateValue} className="bg-green-200 rotate-90 md:rotate-0 text-green-900 rounded-full p-1 md:w-20" />
          <ToAirport />
          <DeptureDate />
        </div>
      </TabsContent>

      {/* Round Trip Tab */}
      <TabsContent value="round_trip" asChild>
        <div className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end">
          <FromAirport />
          <ArrowRightLeft onClick={alternateValue} className="bg-green-200 md:hidden rotate-90 md:rotate-0 text-green-900 rounded-full p-1 md:w-20" />
          <div onClick={alternateValue} className="p-2 text-green-900 bg-green-200 rounded-full md:h-8 md:w-8 hidden md:flex justify-center items-center">
            <ArrowRightLeft className="rotate-90 md:rotate-0" />
          </div>
          <ToAirport />
          <DeptureDate />
          <ReturnDate />
        </div>
      </TabsContent>

      {/* Multi City Tab */}
      <TabsContent className=" " value="multi_city">
        <h2 className='min-h-5 font-bold mont flex justify-center items-baseline'>
          Under development
        </h2>
       
        <div className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end">
          <FromAirport />
          <ArrowRightLeft onClick={alternateValue} className="bg-green-200 rotate-90 md:rotate-0 text-green-900 rounded-full p-1 md:w-20" />
          <ToAirport />
          <DeptureDate />
          
        </div>
      
    
      </TabsContent>
    </div>
  );
};

export default SearchTabContent;