import { Button } from "../ui/button";

import logo from "../../assets/Logo/Logo.svg";


const Header = () => {


    
    return (
       <div className={` flex  min-h-20 lg:mt-8  z-50  absolute   top-0 left-0 right-0 mx-auto  justify-center items-center `}>
          <div className={`  flex justify-between items-center lg:px-8 px-4 container  `}>
          

          <div>
              <img className="max-h-20 " src={logo} alt="logo" />

          </div>
          <div className="flex  justify-center items-center gap-4 ">
              <Button variant="outline" className="bg-slate-500/30 text-white" > 
                   Sign In
              </Button>
              <Button className="bg-green-300 text-black"  >
                  Sign Up
              </Button>
          </div>
          
         </div>
       </div>
    );
};

export default Header;