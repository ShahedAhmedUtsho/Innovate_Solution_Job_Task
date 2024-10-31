import { Label } from '@radix-ui/react-label';


const ReturnDate = () => {
    return (
        <div className="md:p-2 p-4  w-full md:w-full  border border-black md:ml-5">
        <Label className="text-xs md:text-[1.1vw] lg:text-xs block text-slate-900/70" htmlFor="email">Return Date</Label>
        <Label className="text-base md:!text-[1.5vw] lg:!text-base overflow-x-auto" htmlFor="email">November 7, 2024 </Label>
  
  
        </div>
    );
};

export default ReturnDate;