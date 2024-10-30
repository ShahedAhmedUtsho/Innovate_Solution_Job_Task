
import { PassengerStore, usePassengerCount } from "@/Store/PassengerStore";
import { Button } from "@/components/ui/button";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";









const PassengerSelectComponent = () => {
  const { adult, children, infants } = PassengerStore.useState((s) => s);
  //lets close porover on click 
const [isPoroverOpen, setIsPoroverOpen] = useState(false) ;

  // all passenger count
  const totalPassengerCount = usePassengerCount()

  // Helper to update adult count
  const updateAdultCount = (action) => {
    PassengerStore.update((s) => {
      if (action === "increment") s.adult += 1;


      else if (s.adult > 1) s.adult -= 1; // Minimum 1 adult required 
    });
  };








  // Helper to update children or infants arrays
  // i use hear a reducer function like redux  to update the state i am new to this concept in pullstate ,
//    i thing this is a good concept to update the state in pullstate also

  const updatePassengerArray = (type, action) => {
    PassengerStore.update((s) => {
      if (action === "increment") {
        // Set index based on length of array
        const newIndex = s[type].length; 
        // Default age 12 for children and 0 for infants 
        // push the new passenger to the array
        // i check many ticket booking website and see they also dont give names or and details ,so i give index as name 

        s[type].push({ index: newIndex, age: type === "children" ? 12 : 0 }); 
      } else if (s[type].length > 0) {
        // Remove the last entry on decrement if length is greater than 0
        // i dont know why  pullstate give s as argument to update the state
        s[type].pop(); 
      }
    });
  };







  // Handle age change for children and infants both by action type like redux
  const handleAgeChange = (type, index, newAge) => {
    PassengerStore.update((s) => {
      const passenger = s[type].find((any) => any.index === index);
      if (passenger) passenger.age = newAge; // Update age after finding the passenger 
    });
  };






  return (
    <Popover className="mont"  open={isPoroverOpen} onOpenChange={setIsPoroverOpen} >
      <PopoverTrigger asChild>
        <Button className="mont"  variant="outline">Passengers ({totalPassengerCount})</Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-80  p-6 bg-white rounded-lg shadow-md">


        {/* Adulte Componet */}
        <div className="flex justify-between items-center mont mb-4 text-xs md:text-base">

          <span>Adults (12 years)</span>
          <div className="flex items-center gap-2">
            <Button
            className="scale-75 md:scale-100 mont"
            onClick={() => updateAdultCount("decrement")}
            
            // Disable decrement button if adult count is 1
            disabled={adult === 1}>
                
                -
            
            </Button>



            <span>{adult}</span>


            <Button className="scale-75 md:scale-100" onClick={
                
                () => {updateAdultCount("increment")}
                
                
                }>
                
                +
                
                
                </Button>
          </div>
        </div>








        {/* Child Component */}
        <div className="flex justify-between items-center mb-4 text-xs md:text-base mont" >
          <span>Children (2-12 years)</span>


          <div className="flex items-center gap-2">
            <Button
            
            className="scale-75 md:scale-100"
            onClick={() =>
            // passing the action and payload 
            {
                updatePassengerArray("children", "decrement")
            }}

            // Disable decrement button if children count is 0
            
            disabled={children.length === 0}>-</Button>
            <span>
                {children.length}
                
                </span>
            <Button className="scale-75 md:scale-100" onClick={() => updatePassengerArray("children", "increment")}>+</Button>
          </div>
        </div>





        {/* Child Age Select */}

{/* i map over the children array and create a select dropdown for each child   */}

        {children.map((child) => (
          <Select key={child.index}
          
          onValueChange={(value) =>{
            // pass the value  after converting into number

            //passing the type ,index and value to the function 
            handleAgeChange("children", child.index, parseInt(value))
            
            }}>
            <SelectTrigger className="w-full mb-2 text-xs md:text-base">


              <SelectValue placeholder={`Age of Child ${child.index + 1}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Age</SelectLabel>

{/* i am using constractor to create an array of 11 elements for empty 11 element array */}

                {[...Array(11)].map((_, i) => (
                    
                   <SelectItem key={i} value={i + 2}>
                    {i + 2} years
                    
                    </SelectItem>
                ))}




              </SelectGroup>
            </SelectContent>
          </Select>
        ))}



        {/* Infant AgeSection */}
        <div className="flex justify-between mont items-center mb-4 text-xs md:text-base">
          <span>Infants (2 years)</span>
          <div className="flex items-center gap-2">
            <Button
            className="scale-75 md:scale-100"
            
            onClick={() => updatePassengerArray("infants", "decrement")}
            
            disabled={infants.length === 0}>-</Button>
            <span>{infants.length}</span>
            <Button className="scale-75 md:scale-100" onClick={() => updatePassengerArray("infants", "increment")}>+</Button>
          </div>
        </div>




        {/* Infant Age Dropdowns */}
{/* i map over the infants array and create a select dropdown for each infant */}

        {infants.map(({ index, age }) => (
          <Select key={index} 
          className="mont"
          onValueChange={(value) => 
            
          {
              // pass the value  after converting into number
              handleAgeChange("infants", index, parseInt(value))
          }


          }>
            <SelectTrigger className="w-full mb-2 text-xs md:text-base">
              <SelectValue placeholder={`Age of Infant ${index + 1}`} />
            </SelectTrigger>
            <SelectContent className="mont">
              <SelectGroup>
                <SelectLabel>Select Age</SelectLabel>

                {/* // i am using constractor to create an array of 2 elements */}
                
                {[...Array(2)].map((_, i) => (
                  <SelectItem key={i} value={i}> 
                  {i} years
                  
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}


        {/* Apply Button */}
        <Button 
        // close porever on click
        onClick={()=>setIsPoroverOpen(false)}
        close porover 
        
        className="w-full mt-4 bg-green-400 text-white">done</Button>
      </PopoverContent>
    </Popover>
  );
};

export default PassengerSelectComponent;


