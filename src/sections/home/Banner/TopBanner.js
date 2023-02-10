import React from "react";
import BannerImage from "../../../utils/images/HeroImage2x.png"

export default function TopBanner(){
    return(
        <div className="flex justify-center">
            <div className="p-4 flex justify-between w-200 md:px-16  flex-wrap lg:flex-nowrap "> 
                <div className="md:w-10/12 lg:w-7/12 xl:w-6/12 xl:mt-44">
                    <h1 className="font-readex_bold text-fontColor text-5xl md:text-7xl lg:text-7xl 2xl:text-12xl ">Plan Less.<br/>Travel More.</h1>
                    <p className="mt-10 mb-4 text-fontColor text-lg md:text-md  xl:text-xl  font-sans_regular">Finding and planning a great itinerary can be stressful and time consuming <b> <i> — Intripid makes it easy </i> </b></p> 
                    <div className="flex mt-10"> 
                    <input
                        type="text"
                        className="
                            w-full
                            md:w-7/12
                            p-4
                            bg-inputBg
                            border-2
                            border-inputBorder 
                            rounded-md font-sans_regular
                            text-md
                            transition
                            ease-in-out
                        "
                        placeholder="Enter your email"
                    /> <button className="bg-primary hover:bg-primaryDark font-sans_medium text-md text-white p-1 ml-1 rounded-md w-40"> Join Now </button>
                    </div>
                    <p className="text-ms md:text-xs font-sans_medium text-lebelFontColor mt-2 mb-2">Become one of our members and get an exclusive travel experience!</p>
                </div>
                <div className= "relative xl:py-20 lg:-top-36">                  
                    <img 
                        src= {BannerImage} 
                        className=" scale-110  w-140 md:scale-125 lg:scale-130 lg:w-150 xl:w-120 xl:mt-20"
                    />
                </div>
            </div>
            
        </div>
    )
}