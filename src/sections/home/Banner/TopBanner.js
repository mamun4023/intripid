import React from "react";
import BannerImage from "../../../utils/images/HeroImage.png"

export default function TopBanner(){
    return(
        <div className="flex justify-center pt-20 ">
            <div className="flex justify-around flex-wrap"> 
                <div className="w-80 ">
                    <h1 className="font-readex_bold text-4xl" >Simplify Your Next Travel</h1>
                    <p style={{fontSize : 8}} className="mt-4 mb-4 font-readex_medium " >Finding and planning a great itinerary can be stressful and time <br/> consuming <b> — Intripid makes it easy </b></p> 
                    <div className="flex"> 
                    <input
                        type="text"
                        className="
                            form-control
                            block
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
                    /> <button className="bg-violet-600 hover:bg-violet-900 text-white p-1 ml-1 rounded-md w-40  "> Join Now </button>
                    </div>
                    <p  style={{fontSize : 8}} className="text-slate-400 mt-2 mb-2">Become one of our members and get an exclusive travel experience!</p>
                </div>
                <div className= "relative md:-top-20 " >                  
                    <img  className="object-fill w-96 " src= {BannerImage} />
                </div>
            </div>
        </div>
    )
}