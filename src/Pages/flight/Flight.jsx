import Banner from '@/components/Banner/Banner';
import Search from '@/components/Search/Search';

import { Outlet } from 'react-router-dom';

const Flight = () => {
    return (
        <div className='  min-h-screen  '>
            <Banner />


          


            <Search />

            {/* // pest hear all the search result on this outlet  */}
            <Outlet /> 
        </div>
    );
};

export default Flight;