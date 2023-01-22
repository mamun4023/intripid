import React from "react"

import BgImage from '../../../utils/CampaignImages/Pattern.png';
import CampaignImage from '../../../utils/CampaignImages/BannerCampaign.png';
import DotWash from '../../../utils/CampaignImages/Dotswashi.png'

export default function FooterTop(){
    
    return(
        <div 
            style={{ backgroundImage: `url(${BgImage})`}}
            className="object-scale-down relative overflow-hidden pb-10"
        >
            <div>
                <img 
                    src= {DotWash} 
                    style = {{height : 600, width : 150}}
                    className = "absolute right-0 invisible lg:visible"
                />
             </div>
            <div className="flex justify-center flex-wrap lg:flex-nowrap">
                <div>
                    <img 
                        src= {CampaignImage}
                        className = "w-96 relative lg:w-9/12 "
                    />
                </div>
                <div className="mt-16 m-8 md:px-20 lg:w-6/12">
                    <div class="flex justify-center">
                        <div class="block p-7 rounded-3xl shadow-lg bg-white ">
                            <h5 class="text-3xl md:text-4xl font-readex_bold text-fontColor mb-2">
                                A more compassionate wolrd through increased travel.
                            </h5>
                            <p class="text-xs text-fontColor leading-5">
                                Travel exposes us to the lives of others. Our mission is to encourage people <br/> to travel by making it easier to plan, book, and execute amazing trips.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center my-8 md:justify-start ">
                        <button
                            className="bg-white text-sm text-fontColor font-sans_medium rounded-full px-12 p-3 w-full md:w-5/12 "
                        > Join Our Campaign </button>
                    </div>    
                </div>
            </div>
        </div>
    )
}