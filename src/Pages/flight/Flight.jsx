import Search from '@/components/Search/Search';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Flight = () => {
    return (
        <div className=' pt-16 md:pt-28 lg:pt-48'>
          


            <Search />

            {/* // pest hear all the search result on this outlet  */}
            <Outlet /> 
        </div>
    );
};

export default Flight;