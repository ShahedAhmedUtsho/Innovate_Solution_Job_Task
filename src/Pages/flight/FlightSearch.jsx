import { useSearchObject } from '@/Store/SearchStore';
import React, { useEffect } from 'react';

const FlightSearch = () => {
    // import useSearchObject from SearchStore , i want to render result based on the search object
    const searchObject = useSearchObject();

// createing use effect for search the result 

useEffect(()=>{
    console.log(searchObject , "from search object use effect")

},[searchObject])








    return (
        <div>
            this is Flight search result 
            
        </div>
    );
};

export default FlightSearch;