import { Label } from '@radix-ui/react-label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { useState } from 'react';

const DeptureDate = () => {

  // state for popover close 

  const [isPopoverOpen,setIsPopoverOpen] = useState(false)


    return (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} >
  <PopoverTrigger asChild> 
  <div className="md:p-2 p-4  w-full md:w-full  border border-black md:ml-5">
        <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">Departure Date</Label>
        <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto  text-nowrap" htmlFor="email">November 7, 2024 </Label>
  
  
        </div>

  </PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>

      
    );
};

export default DeptureDate;