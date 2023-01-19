import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
    
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        <SwiperSlide style={{ margin :30 }} >
            <div className="flex justify-between p-10 ">
                <div className="m-10 realative ">
                    <img  
                        src = "data:image/jpeg;base64,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"
                        style={{ height : 100, width : 100,  borderRadius : 100}}
                        className = "absolute  top-5 left-10"
                    /> 
                    <div>
                      </div>  
                </div>
                <div className="p-2 pl-10">
                    <h2>Stephen McKulley, Adventurer  </h2>
                    <div className="flex">
                        <div className="mx-2">
                            <h1 className="text-3xl font-readex_bold">66</h1>
                        </div>
                        <div>
                            <p className="text-xs items-start ">I have been Contacting thme for my flight bookings. They never fail to give me affordable flights. One loyal customer here! Thank you so munch, Intripid</p>
                        </div>
                    </div>
                </div> 
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        
      </Swiper>
 
    </>
  );
}
