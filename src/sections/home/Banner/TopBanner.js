import React from "react";
import BannerImage from "../../../utils/images/HeroImage.png"

export default function TopBanner(){
    return(
        <div className="flex justify-center px-3 md:px-8 lg:px-20 pt-10 lg:mt-14 m-2 ">
            <div className="flex justify-between  flex-wrap lg:flex-nowrap"> 
                <div className=" md:w-10/12 lg:w-7/12 xl:w-5/12">
                    <h1 className="font-readex_bold text-fontColor text-5xl md:text-7xl lg:text-7xl">Plan Less.<br/>Travel More.</h1>
                    <p className="mt-6 mb-4 text-fontColor text-lg md:text-md  font-sans_regular">Finding and planning a great itinerary can be stressful and time consuming <b> <i> — Intripid makes it easy </i> </b></p> 
                    <div className="flex mt-6"> 
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
                            text-xs
                            transition
                            ease-in-out
                        "
                        id="exampleFormControlInput1"
                        placeholder="Enter your email"
                    /> <button className="bg-primary hover:bg-primaryDark font-sans_medium text-sm text-white p-1 ml-1 rounded-md w-40"> Join Now </button>
                    </div>
                    <p className="text-ms md:text-xs font-sans_medium text-lebelFontColor mt-2 mb-2">Become one of our members and get an exclusive travel experience!</p>
                </div>
                <div className= "relative lg:-top-36">                  
                    <img className="object-fill lg:w-12/12 " src= {BannerImage} />
                </div>
            </div>
        </div>
    )
}