

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import { useCallback, useEffect, useMemo } from "react";
import { Tabs,  TabsList, TabsTrigger } from "../ui/tabs";

import AirportApiFetch from "@/Api/AirportApiFetch";
import CommonBottomBar from "./CommonBottomBar";
import { JourneyTypeUpdate } from "@/Store/SearchStore";


import SearchTabContent from "./SearchTabContent";
import { AirportStore } from "@/Store/AirportsStore";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchSlash } from "lucide-react";



const Search = () => {


const {pathname} = useLocation()
const navigate = useNavigate()


// check is airport data  exist in localStorage

const airports = useMemo(()=>localStorage.getItem("airports"),[]) ;

// 
//





useEffect(()=>{
  if(airports){
    
    AirportStore.update(s=>{
      s.airports = JSON.parse(airports)
    })
   
  }else{
   
    // AirportApiFetch is a simple async function Which is phase data,(@/Api/AirportApiFetch)
    //   which is fetch data from airport auto suggestion API 
    // store it on local storage and set on airportStore state (@Store/AirportStore.js)

    
    AirportApiFetch() 
 
   
  }

  






  },[])


// for change the journey type : one way , round trip , multi city

const handleJourneyTypeChange = useCallback((e)=>{
  JourneyTypeUpdate(e)
  

},[])








    return (
        <div className=' search_component  texture z-40   flex flex-col  justify-center items-center  px-4 lg:px-8 pt-4 pb-8  md:w-[90%] lg:w-[85vw] max-w-[1232px] mx-auto border border-black/10 bg-white md:relative  md:bottom-10 lg:bottom-20 md:rounded-2xl'>

<div className={` ${pathname ==="/" ? " hidden  " : ""} flex gap-2 bg-black/10 hover:bg-green-500/20  rounded-lg relative top-2 py-2 px-3  lg:hidden `} onClick={()=>{
  navigate("/")
}}>
<SearchSlash className="" />

Modify search


</div>



<Tabs  onValueChange={handleJourneyTypeChange}  defaultValue="OneWay" className={` w-full h-full ${pathname !=="/" ? " hidden lg:flex " : ""}  flex flex-col justify-start items-start  `}>
  <TabsList className="mont  bg-green-700 text-white" >
    <TabsTrigger   value="OneWay"  >One Way</TabsTrigger>
    <TabsTrigger  value="RoundTrip">Round Trip</TabsTrigger>
    <TabsTrigger  value="MultiCity">Multi City</TabsTrigger>
  </TabsList>
<SearchTabContent />
</Tabs>

<CommonBottomBar />

        </div>
    );
};

export default Search;

