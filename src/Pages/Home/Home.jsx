import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import SearchBoxSkeleton from "@/components/Search/SearchBoxSkeleton";
import React from "react";
const  Search =   React.lazy(()=>import("@/components/Search/Search"))





const Home = () => {
    return (
    <div className="">
      
        <Banner />

        <React.Suspense fallback={
       
            <SearchBoxSkeleton />
            }>
        {/* <Search /> */}
        
          <Search />
        
        </React.Suspense>
       
    </div>
    );
};

export default Home;