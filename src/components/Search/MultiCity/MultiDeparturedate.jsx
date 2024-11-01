
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MultiCityStore, updateMultiSegment } from '@/Store/MultiCityStore';
import PropTypes from 'prop-types';
import  { useCallback } from 'react';

const MultiDeparturedate = ({UniqueId}) => {

const date = MultiCityStore.useState(s=>s.Segment.find((item)=>item.id === UniqueId)?.departure_date);
 




// 

const handleOnSelect = useCallback((e) => {
  if (e instanceof Date && !isNaN(e)) {
   updateMultiSegment(UniqueId,"departure_date",e);
  } else {
    console.error("Invalid date selected:", e);
  }
}, []);
    return (
        <Popover >
        <PopoverTrigger asChild>
          <div className="md:p-2 bg-white/90 p-4 w-full md:w-full border border-black md:ml-5">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">Departure Date</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto text-nowrap" htmlFor="email">
              {date?.toLocaleDateString('en-US', {
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

export default MultiDeparturedate;






MultiDeparturedate.propTypes = {
    UniqueId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};