import React from "react"

import BgImage from '../../../utils/CampaignImages/Pattern.png';
import CampaignImage from '../../../utils/CampaignImages/BannerCampaign.png';
import DotWash from '../../../utils/CampaignImages/Dotswashi.png'

export default function FooterTop(){
    
    return(
        <div className="flex justify-center"> 
        <div 
            style={{ backgroundImage: `url(${BgImage})`}}
            className="object-scale-down  relative overflow-hidden bg-no-repeat w-200 xl:h-140  xl:px-16"
        >
            <div>
                <img 
                    src= {DotWash} 
                    className = "absolute z-0 right-0 invisible lg:visible"
                />
             </div>
            <div className="flex justify-center flex-wrap lg:flex-nowrap">
                <div>
                    <img 
                        src= {CampaignImage}
                        className = "relative scale-110 hidden xl:block"
                    />
                </div>
                <div className="mt-16 m-4 md:m-10 xl:m-0 xl:mt-40 xl:pl-10  lg:w-6/12 z-10">
                    <div class="flex justify-center">
                        <div class="block p-7 rounded-3xl shadow-lg bg-white  bg-blend-normal">
                            <h5 class="text-3xl md:text-4xl xl:text-5xl font-readex_bold text-fontColor mb-2">
                                A more compassionate wolrd through increased travel.
                            </h5>
                            <p class="text-xl text-fontColor py-6 leading-5">
                                Travel exposes us to the lives of others. Our mission is to encourage people  to travel by making it easier to plan, book, and execute amazing trips.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10  md:justify-start ">
                        <button
                            className="bg-white text-md text-fontColor font-sans_medium rounded-full px-12 p-4 w-full md:w-5/12 lg:w-6/12 "
                        > Join the Mission </button>
                    </div>    
                </div>
            </div>
        </div>
        </div>
    )
}