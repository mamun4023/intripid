import React from "react"
import BgImage from '../../../utils/images/bgImage1.png';
import BgTopLeft from '../../../utils/images/bgTopLeft.svg';
import BgTopRight from '../../../utils/images/bgTopRight.svg';

import TravelIcon from '../../../utils/BrandIcons/Pngs/Travel 1.png';
import TravelAdvisorIcon from '../../../utils/BrandIcons/Pngs/Travel Advisor 1.png'
import TravelTicketIcon from '../../../utils/BrandIcons/Pngs/Tickets 1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



export default function TopBody(){
    return(
        <div 
            style={{ backgroundImage: `url(${BgImage})` }}
            className = "w-full relative overflow-hidden "
        >

            <div className = "w-40 absolute -left-16 -top-8">
                <img src= {BgTopLeft} />
            </div>
            <div className = "w-40 absolute -bottom-16 -right-8">
                <img src= {BgTopRight} />
            </div>    
            
            <div className="flex justify-center pt-10 ">
                <div className=" max-w-xl "> 
                    <h1 className="text-white text-center font-readex_bold text-3xl">Enjoy access to the world's <br/> best travel advisors & travel deals</h1>
                </div>
            </div>
             {/* center box */}
            <div className="flex justify-center flex-wrap">
                <div class="block p-6 m-2  rounded-lg shadow-lg bg-white w-80">
                    <img  src= {TravelIcon} />
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 font-readex_bold">Unlimited & <br/> Personalized</h5>
                    <p class="text-gray-700 text-sm mb-4">
                        Members get limitless recommendations of destinations based on their customization
                    </p>
                </div>
                <div class="block p-6 m-2  rounded-lg shadow-lg bg-white w-80">
                    <img  src= {TravelAdvisorIcon} />
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 font-readex_bold">
                        Travel Experts & <br/> Advisors 
                    </h5>
                    <p class="text-gray-700 text-sm mb-4">
                        No more doubts because of professional advices from seasoned travelers
                    </p>
                </div>
                <div class="block p-6 m-2 rounded-lg shadow-lg bg-white w-80">
                    <img  src= {TravelTicketIcon} />
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 font-readex_bold">
                        Killer perks & <br/> packages
                    </h5>
                    <p class="text-gray-700 text-sm mb-4">
                        Free upgrades, vouchers, flash deals, and marvelous experiences!
                    </p>
                </div>        
            </div>
            <div className="flex justify-center flex-wrap">
                <button
                    className="bg-white text-black text-ms pr-10 pl-10 p-4 m-2 rounded-full font-readex_medium"
                
                > Be an Exclusive Member Now 
                    <FontAwesomeIcon 
                        icon = {faStar}
                        size = {20}
                        className="text-violet-600 pl-2"
                    />
                </button>
            </div>
            <div className="flex justify-center flex-wrap">
                <h3 className="text-white font-readex_medium "> Have a trip for as low as $28! </h3>
            </div>
        </div>
        
    )
}