
import { Outlet } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '@/components/Header/Header';
const Routes = () => {
    return (
        

       
        <div className='min-h-[150vh] lg:container mx-auto lg:pt-8  '>
            <Header />
           
            <Outlet  />
            
        </div>
       
    );
};

export default Routes;