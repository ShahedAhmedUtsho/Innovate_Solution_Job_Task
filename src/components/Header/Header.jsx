import { Button } from "../ui/button";

import logo from "../../assets/Logo/Logo.svg";
import { AlignCenter } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";


const Header = () => {
    const {pathname} = useLocation()


    const navigate = useNavigate()
const toHome = ()=>{
    navigate("/")
}

    
    return (
       <div className={` flex   min-h-20 lg:mt-8  z-50  absolute   top-0 left-0 right-0 mx-auto ${pathname !== "/" ? "max-w-[1232px] mx-4 lg:mx-auto" : "lg:px-8 md:px-4" }  justify-center items-center `}>
          <div className={`  flex justify-between items-center     w-full  `}>
          

          <div onClick={toHome}  >
              <img className="md:max-h-20 w-20 md:w-auto  " src={logo} alt="logo" />

          </div>
          <div className="flex  justify-center items-center gap-2 md:gap-4 ">
              <Button variant="outline" className="bg-slate-500/30 text-xs md:text-sm text-white md:block hidden" > 
                   Sign In
              </Button>
              <Button className="bg-green-800 text-green-100  hover:bg-green-600  text-xs md:text-sm md:block hidden"  >
                  Sign Up
              </Button>
              <AlignCenter className="md:hidden text-white" />
          </div>
          
         </div>
       </div>
    );
};

export default Header;