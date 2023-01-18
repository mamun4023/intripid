import React from "react"

import BgImage from '../../../utils/CampaignImages/Pattern.png';
import CampaignImage from '../../../utils/CampaignImages/BannerCampaign.png';
import DotWash from '../../../utils/CampaignImages/Dotswashi.png'

export default function FooterTop(){
    
    return(
        <div 
            style={{ backgroundImage: `url(${BgImage})`}}
            className="object-scale-down relative">
             
             <div className=" ">
                <img 
                    src= {DotWash} 
                    className = " absolute right-0 invisible lg:visible"
                />
             </div>

            <div className="flex justify-center flex-wrap">
                <div>
                    <img 
                        src= {CampaignImage}
                        className = "h-96 "
                    />
                </div>
                <div className="mt-16">
                    <div class="flex justify-center">
                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                                quote-left A more compassionate world through increased travel.
                            </h5>
                            <p class="text-gray-700 text-base mb-4">
                                Travel exposes us to the lives of others. Our mission is to encourage more people to travel by making it easier to plan, book, and execute amazing trips.
                            </p>
                           
                        </div>
                    </div>
                    <div className="flex justify-center m-2">
                        <button
                            className="bg-white text-black rounded-full pl-12 pr-12 p-2"
                        > Join Our Campaign </button>
                    </div>    
                </div>

            </div>
        </div>
    )
}