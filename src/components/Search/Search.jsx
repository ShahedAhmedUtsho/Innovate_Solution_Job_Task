

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import AirportApiFetch from "@/Api/AirportApiFetch";
import CommonBottomBar from "./CommonBottomBar";
import { JourneyTypeUpdate } from "@/Store/SearchStore";
import { AirportStore } from "@/Store/airportStore";
import { Label } from "@/components/ui/label"
import { ArrowRightLeft } from "lucide-react";
import SearchTabContent from "./SearchTabContent";



const Search = () => {
// check is airport data  exist in localStorage

const airports = localStorage.getItem('airports') ;

// 




useEffect(()=>{
  if(airports){
    console.log('data exist')
    AirportStore.update(s=>{
      s.airports = JSON.parse(airports)
    })
   
  }else{
    console.log('data not exist') ;
    // AirportApiFetch is a simple async function Which is phase data,(@/Api/AirportApiFetch)
    //   which is fetch data from airport auto suggestion API 
    // store it on local storage and set on airportStore state (@Store/AirportStore.js)


    AirportApiFetch() 
 
   
  }

  






  },[])


// for change the journey type : one way , round trip , multi city

const handleJourneyTypeChange = (e)=>{
  JourneyTypeUpdate(e)
  

}








    return (
        <div className='    flex flex-col  justify-center items-center  px-4 lg:px-8 pt-4 pb-8 search_component md:w-[90%] lg:w-[80vw] max-w-[1232px] mx-auto border border-black/10 bg-white md:relative  md:bottom-10 lg:bottom-20 md:rounded-2xl'>

<Tabs  onValueChange={handleJourneyTypeChange}  defaultValue="one_way" className=" w-full h-full flex flex-col justify-start items-start ">
  <TabsList className="mont" >
    <TabsTrigger  value="one_way"  >One Way</TabsTrigger>
    <TabsTrigger  value="round_trip">Round Trip</TabsTrigger>
    <TabsTrigger  value="multi_city">Multi City</TabsTrigger>
  </TabsList>
<SearchTabContent />
</Tabs>

<CommonBottomBar />

        </div>
    );
};

export default Search;