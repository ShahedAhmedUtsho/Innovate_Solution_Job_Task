import { Button } from "../ui/button";

import logo from "../../assets/Logo/Logo.svg";
import { AlignCenter } from "lucide-react";


const Header = () => {


    
    return (
       <div className={` flex  min-h-20 lg:mt-8  z-50  absolute   top-0 left-0 right-0 mx-auto  justify-center items-center `}>
          <div className={`  flex justify-between items-center lg:px-8 px-4 container  `}>
          

          <div>
              <img className="md:max-h-20 w-20 md:w-auto  " src={logo} alt="logo" />

          </div>
          <div className="flex  justify-center items-center gap-2 md:gap-4 ">
              <Button variant="outline" className="bg-slate-500/30 text-xs md:text-sm text-white md:block hidden" > 
                   Sign In
              </Button>
              <Button className="bg-green-300 text-black  text-xs md:text-sm md:block hidden"  >
                  Sign Up
              </Button>
              <AlignCenter className="md:hidden text-white" />
          </div>
          
         </div>
       </div>
    );
};

export default Header;