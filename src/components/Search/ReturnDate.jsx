import { Label } from '@radix-ui/react-label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar"

import {  SelectedReturnDateUpdate, useSelectedReturnDate,  } from '@/Store/SelectedAirportStore';

const ReturnDate = () => {
const date = useSelectedReturnDate();
 




// 

const handleOnSelect = (e)=>{

  SelectedReturnDateUpdate(e);
}


  return (
    <Popover >
      <PopoverTrigger asChild>
        <div className="md:p-2 p-4 bg-white/90 w-full md:w-full border border-black md:ml-5">
          <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">Return Date</Label>
          <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto text-nowrap" htmlFor="email">
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Label>
        </div>
      </PopoverTrigger>





      <PopoverContent >
      <Calendar
      mode="single"
      selected={date}
      onSelect={handleOnSelect}
      className=" p-0   w-full "
    />
      </PopoverContent>
    </Popover>
  );
};



export default ReturnDate;