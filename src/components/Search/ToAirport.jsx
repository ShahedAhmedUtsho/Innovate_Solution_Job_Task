import { Label } from '@radix-ui/react-label';


const ToAirport = () => {
    return (
        <div className="md:p-2 p-4  w-full md:w-full  border border-black">
            <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">To</Label>
            <Label className="text-base md:!text-[1.5vw] lg:!text-base  overflow-x-auto  w-full text-nowrap " htmlFor="email">DAC - International Airport </Label>
      
      
            </div>
    );
};

export default ToAirport;