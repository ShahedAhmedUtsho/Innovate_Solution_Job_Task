
import { TabsContent } from '../ui/tabs';
import { ArrowRightLeft } from 'lucide-react';
import { Label } from '../ui/label';
import FromAirport from './FromAirport';
import ToAirport from './ToAirport';
import DeptureDate from './DeptureDate';
import ReturnDate from './ReturnDate';
import { FromSearchAirportsUpdate, SelectedAirportStore, ToSearchAirportsUpdate } from '@/Store/SelectedAirportStore';
import { useEffect } from 'react';

const SearchTabContent = () => {


// Alternate the value of arrival and deparature 
const arrivalAirport = SelectedAirportStore.useState(s=>s.Arrival) ;
const departureAirport = SelectedAirportStore.useState(s=>s.Departure) ;

const alternateValue = ()=>{
  // console.log("hitting")
  // console.log(arrivalAirport , departureAirport)

    
  //   FromSearchAirportsUpdate({...arrivalAirport}) ;
  //   ToSearchAirportsUpdate( {...departureAirport})

    
    
    
    }


    // useEffect(()=>{
    //   console.log(arrivalAirport,"arrival")
    //   console.log(departureAirport,"depture")

    // },[arrivalAirport,departureAirport])


    return (
        <div className=" w-full h-full   ">
        <TabsContent value="one_way" asChild>


          
          <div className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end  ">





<FromAirport /> 


            
            <ArrowRightLeft onClick={alternateValue} className="bg-green-200 rotate-90 md:rotate-0  text-green-900 rounded-full p-1 md:w-20 " />
       

<ToAirport />

         

            <DeptureDate />
            
      
      
      
          </div>
          
          
          
          </TabsContent>
        <TabsContent value="round_trip" asChild>
          
          
          
        <div className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end  ">


          <FromAirport />


            <ArrowRightLeft onClick={alternateValue} className="bg-green-200 md:hidden rotate-90 md:rotate-0  text-green-900 rounded-full p-1 md:w-20 " />
            <div onClick={alternateValue} className='p-2 text-green-900 bg-green-200 rounded-full   md:h-8 md:w-8 hidden md:flex justify-center items-center  '>
            <ArrowRightLeft className="rotate-90 md:rotate-0      " />
            </div>
            
          
<ToAirport />

         <DeptureDate />



         <ReturnDate />
            
      
      
      
          </div>
          
          
          
          
          </TabsContent>
        <TabsContent value="multi_city">multi_city</TabsContent>
        </div>
    );
};

export default SearchTabContent;