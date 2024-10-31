import { useEffect, useState } from "react";


import { Parallax, Background } from 'react-parallax';
const Banner = () => {
    const [bannerImgIndex, setBannerImgIndex] = useState(0);
    const banner_images = [
        // "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/mvftuub4fws8gpsuzha6",
        // "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/cto57dqc74c3skexscqc",
        // "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/r4pl2y2ppwbdrb1rhkcm",
        "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/ftqrheyacaq9rfsvp2lu",
        // "https://res.cloudinary.com/dxpdy0jfz/image/upload/f_auto,q_auto/ws4glikitkru8aojze9g"
    ];

// image Changing effect 
//   useEffect(()=>{
//     const interval = setInterval(()=>{
//         setBannerImgIndex((prev)=> prev === banner_images.length-1 ? 0 : prev + 1)


//     },5000)
//     return ()=> clearInterval(interval)

//   },[])









    return (
        <div className="lg:h-[600px] md:h-96 h-60    overflow-hidden " >
            <div className="w-full  relative  h-full bg-black flex items-center justify-center"


            
            
            >
                
              <img  className="object-cover   absolute top-0 left-0 z-0   w-full h-full"   src={banner_images[bannerImgIndex]} 
              
              style={{
                background : `url(${banner_images[bannerImgIndex]})`,
               
            }}
              
              
              
              alt="banner item" />
              <h6 className="mont text-white text-[7vw]    z-50">
            Live & <span className="text-outline">Travel</span>
            </h6>
            </div>
            
           
        </div>
    );
};

export default Banner;
