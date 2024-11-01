
import { Outlet } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '@/components/Header/Header';
import { Toaster } from "@/components/ui/toaster"
const Routes = () => {
    return (
        

       
        <div className='min-h-[150vh]  mx-auto   '>
            <Header />
           
            <Outlet  />
            <Toaster />
        </div>
       
    );
};

export default Routes;