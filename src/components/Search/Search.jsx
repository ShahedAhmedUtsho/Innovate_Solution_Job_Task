

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";



const Search = () => {
    return (
        <div className='   flex flex-col  justify-center items-center min-h-72 lg:h-72 h-96  px-4 lg:px-8 pt-4 pb-8 search_component md:w-[80vw] max-w-[1232px] mx-auto border border-black/10 bg-white md:relative  md:bottom-10 lg:bottom-20 rounded-2xl'>

<Tabs defaultValue="one_way" className=" w-full h-full flex flex-col justify-start items-start ">
  <TabsList className="" >
    <TabsTrigger value="one_way"  >One Way</TabsTrigger>
    <TabsTrigger value="round_trip">Round Trip</TabsTrigger>
    <TabsTrigger value="multi_city">Multi City</TabsTrigger>
  </TabsList>
  <div className=" w-full h-full">
  <TabsContent value="one_way">one way</TabsContent>
  <TabsContent value="round_trip">round_trip</TabsContent>
  <TabsContent value="multi_city">multi_city</TabsContent>
  </div>
</Tabs>

        </div>
    );
};

export default Search;