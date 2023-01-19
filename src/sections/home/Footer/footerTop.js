import React from "react"

import BgImage from '../../../utils/CampaignImages/Pattern.png';
import CampaignImage from '../../../utils/CampaignImages/BannerCampaign.png';
import DotWash from '../../../utils/CampaignImages/Dotswashi.png'

export default function FooterTop(){
    
    return(
        <div 
            style={{ backgroundImage: `url(${BgImage})`}}
            className="object-scale-down relative overflow-hidden pb-10">
             
             <div className=" ">
                <img 
                    src= {DotWash} 
                    style = {{height : 600, width : 150}}
                    className = "absolute right-0 invisible lg:visible"
                />
             </div>

            <div className="flex justify-center flex-wrap">
                <div>
                    <img 
                        src= {CampaignImage}
                        style = {{width : '30rem'}}
                        className = "w-96 relative  "
                    />
                </div>
                <div className="mt-28">
                    <div class="flex justify-center">
                        <div class="block p-6 rounded-3xl shadow-lg bg-white ">
                            <h5 class="text-gray-900 text-xl font-readex_bold mb-2">
                                Quote-left A more compassionate world <br/> through increased travel.
                            </h5>
                            <p class="text-gray-700 text-xs">
                                Travel exposes us to the lives of others. Our mission is to encourage people <br/> to travel by making it easier to plan, book, and execute amazing trips.
                            </p>
                           
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <button
                            className="bg-white text-md text-black rounded-full px-8 p-2 hover:bg-violet-500 hover:text-white"
                        > Join Our Campaign </button>
                    </div>    
                </div>
            </div>
        </div>
    )
}