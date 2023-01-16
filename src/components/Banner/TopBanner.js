import React from "react";
import BannerImage from '../../utils/images/HeroImage.png'

export default function TopBanner(){
    return(
        <div className="flex justify-center">
            <div className="flex justify-around"> 
                <div className=" w-80 ">
                    <h1 className="font-readex_bold text-2xl" >Simplify Your Next Travel</h1>
                    <p className="font-readex_light text-xs" >Finding and planning a great itinerary can be stressful and time consuming — Intripid makes it easy</p> 
                    <div className="flex"> 
                    <input
                        type="text"
                        class="
                        
                            form-control
                            block
                            w-40
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-slate-200
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="exampleFormControlInput1"
                        placeholder="Enter your email"
                    /> <button className=" bg-violet-600 text-white p-2 rounded-md "> Join </button>
                    </div>
                    <p className="text-sm text-slate-400">Become one of our members and get an exclusive travel experience!</p>
                </div>
                <div >                  
                    <img className=" w-96 " src= {BannerImage} />
                </div>
            </div>
        </div>
    )
}