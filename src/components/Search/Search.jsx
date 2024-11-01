

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import { useCallback, useEffect, useMemo } from "react";
import { Tabs,  TabsList, TabsTrigger } from "../ui/tabs";

import AirportApiFetch from "@/Api/AirportApiFetch";
import CommonBottomBar from "./CommonBottomBar";
import { JourneyTypeUpdate } from "@/Store/SearchStore";


import SearchTabContent from "./SearchTabContent";
import { AirportStore } from "@/Store/AirportsStore";



const Search = () => {
// check is airport data  exist in localStorage

const airports = useMemo(()=>localStorage.getItem("airports"),[]) ;

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
        <div className=' search_component  texture z-50   flex flex-col  justify-center items-center  px-4 lg:px-8 pt-4 pb-8  md:w-[90%] lg:w-[85vw] max-w-[1232px] mx-auto border border-black/10 bg-white md:relative  md:bottom-10 lg:bottom-20 md:rounded-2xl'>

<Tabs  onValueChange={handleJourneyTypeChange}  defaultValue="OneWay" className=" w-full h-full flex flex-col justify-start items-start ">
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