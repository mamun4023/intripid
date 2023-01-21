import React from "react";
import BannerImage from "../../../utils/images/HeroImage.png"

export default function TopBanner(){
    return(
        <div className="flex justify-center pt-4 m-2 ">
            <div className="flex justify-around flex-wrap"> 
                <div className="md:w-full lg:w-80">
                    <h1 className="font-readex_bold text-fontColor text-6xl md:text-6xl lg:text-4xl">Simplify Your Next Travel</h1>
                    <p className="mt-4 mb-4 text-fontColor text-xs font-sans_regular">Finding and planning a great itinerary can be stressful and time consuming <b> <i> — Intripid makes it easy </i> </b></p> 
                    <div className="flex"> 
                    <input
                        type="text"
                        className="
                            
                            w-full
                            p-2
                            text-xm
                            font-normal
                            text-slate-200
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none
                        "
                        id="exampleFormControlInput1"
                        placeholder="Enter your email"
                    /> <button className="bg-primary hover:bg-primaryDark font-sans_medium text-xs text-white p-1 ml-1 rounded-md w-40"> Join Now </button>
                    </div>
                    <p className="text-slate-500 text-xs mt-2 mb-2">Become one of our members and get an exclusive travel experience!</p>
                </div>
                <div className= "relative lg:-top-10" >                  
                    <img className="object-fill lg:w-96 " src= {BannerImage} />
                </div>
            </div>
        </div>
    )
}