"use client"
import Category from "@/Components/User/Moblie/Home/Category/Category";
import ProfileLogo from "@/Components/User/Moblie/profileLogo/ProfileLogo";
import SwiperHome from "@/Components/User/Moblie/Home/SwiperHome/SwiperHome";
import SwiperHomeCards from "@/Components/User/Moblie/Home/SwiperHomeCards/SwiperHomeCards";
import Banner from "@/Components/User/Moblie/Home/Banner/Banner";
import Services from "@/Components/User/Moblie/Home/Services/Services";
import { isMobile } from 'is-mobile';
import { useState, useEffect } from 'react';
export default function Home() {
  const [isMobileDevice, setIsMobileDevice] = useState(null);
  
  // console.log(isMobile())

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    <>
      <div>
      {/* {isMobileDevice ? 
       <>
       <ProfileLogo />
       <SwiperHome />
       <SwiperHomeCards />
       <Category />
       <Banner />
       <Services />
     </>
     
      :
      <p> user come with pc</p>
      
      
      } */}
         <ProfileLogo />
       <SwiperHome />
       <SwiperHomeCards />
       <Category />
       <Banner />
       <Services />
       
      </div>
    </>
  );
}
