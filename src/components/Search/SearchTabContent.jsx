import React from 'react';
import { TabsContent } from '../ui/tabs';
import { ArrowRightLeft } from 'lucide-react';
import { Label } from '../ui/label';

const SearchTabContent = () => {
    return (
        <div className=" w-full h-full   ">
        <TabsContent value="one_way" asChild>
          <div className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end  ">
            <div className="md:p-2 p-4   w-full md:w-full  border border-black">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs  block text-slate-900/70" htmlFor="email">Form</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto" htmlFor="email">DAC - International Airport </Label>
      
      
            </div>
            <ArrowRightLeft className="bg-green-200 rotate-90 md:rotate-0  text-green-900 rounded-full p-1 md:w-20 " />
            <div className="md:p-2 p-4  w-full md:w-full  border border-black">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">To</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base  overflow-x-auto" htmlFor="email">DAC - International Airport </Label>
      
      
            </div>
            <div className="md:p-2 p-4  w-full md:w-full  border border-black md:ml-5">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">Departure Date</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto" htmlFor="email">November 7, 2024 </Label>
      
      
            </div>
            
      
      
      
          </div>
          
          
          
          </TabsContent>
        <TabsContent value="round_trip" asChild>
          
          
          
        <div className="w-full my-5 gap-2 flex flex-col md:flex-row md:items-center items-end  ">
            <div className="md:p-2 p-4   w-full md:w-full  border border-black">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs  block text-slate-900/70" htmlFor="email">Form</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto text-nowrap" htmlFor="email">DAC - International Airport </Label>
      
      
            </div>
            <ArrowRightLeft className="bg-green-200 md:hidden rotate-90 md:rotate-0  text-green-900 rounded-full p-1 md:w-20 " />
            <div className='p-2 text-green-900 bg-green-200 rounded-full   md:h-8 md:w-8 hidden md:flex justify-center items-center  '>
            <ArrowRightLeft className="rotate-90 md:rotate-0      " />
            </div>
            
            <div className="md:p-2 p-4  w-full md:w-full  border border-black">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">To</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base  overflow-x-auto  w-full text-nowrap " htmlFor="email">DAC - International Airport </Label>
      
      
            </div>
            <div className="md:p-2 p-4  w-full md:w-full  border border-black md:ml-5">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">Departure Date</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto  text-nowrap" htmlFor="email">November 7, 2024 </Label>
      
      
            </div>
            <div className="md:p-2 p-4  w-full md:w-full  border border-black md:ml-5">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">Return Date</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto" htmlFor="email">November 7, 2024 </Label>
      
      
            </div>
            
      
      
      
          </div>
          
          
          
          
          </TabsContent>
        <TabsContent value="multi_city">multi_city</TabsContent>
        </div>
    );
};

export default SearchTabContent;