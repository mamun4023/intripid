import React from "react"
import BgImage from '../../../utils/images/bgImage1.png';
import BgTopLeft from '../../../utils/images/bgTopLeft.svg';
import BgTopRight from '../../../utils/images/bgTopRight.svg';
import TravelIcon from '../../../utils/BrandIcons/Pngs/Travel 1.png';
import TravelAdvisorIcon from '../../../utils/BrandIcons/Pngs/Travel Advisor 1.png'
import TravelTicketIcon from '../../../utils/BrandIcons/Pngs/Tickets 1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-regular-svg-icons';


export default function TopBody(){
    return(
        <div 
            style={{ backgroundImage: `url(${BgImage})`}}
            className = "w-full relative overflow-hidden "
        >

            <div className = "w-48 absolute -left-16 -top-8">
                <img src= {BgTopLeft} />
            </div>
            <div className = "w-40 absolute -bottom-16 -right-8">
                <img src= {BgTopRight} />
            </div>    
            
            <div className="flex justify-center pt-10 ">
                <div className=" max-w-xl px-8 m-7 "> 
                    <h1 className="text-white text-center font-readex_bold text-3xl ">Enjoy access to the world's best travel advisors & travel deals</h1>
                </div>
            </div>
             {/* center box */}
            <div className="flex justify-center flex-wrap">
                <div className="block p-4 m-4  rounded-3xl shadow-lg bg-white w-80">
                    <div className="my-2 p-2"> 
                        <img  
                            src= {TravelIcon} 
                            className = "w-20"
                        />
                    </div>
                    <div className="pr-16 p-2"> 
                        <h5 className=" text-fontColor text-2xl leading-tight font-medium mb-2 font-readex_bold">Unlimited & Personalized</h5>
                        <p className="text-sm font-sans_regular text-fontColor">
                            Members get limitless recommendations of destinations based on their customization
                        </p>
                    </div>
                </div>
                <div className="block p-4 m-4  rounded-3xl shadow-lg bg-white w-80">
                    <div className="my-2 p-2"> 
                        <img  
                            src= {TravelAdvisorIcon} 
                            className = "w-20"
                        />
                    </div>
                    
                    <div className="p-2 pr-14"> 
                        <h5 className="text-fontColor text-2xl mb-2 font-readex_bold">
                            Travel Experts Advisors 
                        </h5>
                        <p className="text-sm text-fontColor font-sans_regular">
                            No more doubts because of professional advices from seasoned travelers
                        </p>
                    </div>
                </div>
                <div className="block p-6 m-4 rounded-3xl shadow-lg bg-white w-80">
                    <div className="my-2 p-2"> 
                        <img  
                            src= {TravelTicketIcon} 
                            className = "w-20"
                        />
                    </div>
                    
                    <div className="p-2 pr-14">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 font-readex_bold">
                            Killer perks & <br/> packages
                        </h5> 
                        <p className="text-sm font-sans_regular text-fontColor">
                            Free upgrades, vouchers, flash deals, and marvelous experiences!
                        </p>
                    </div>
                </div>        
            </div>
            <div className="flex justify-center flex-wrap m-4 md:mt-16">
                <button
                    className="bg-white font-sans_medium text-fontColor text-black text-ms px-8  p-2 rounded-full  hover:bg-slate-200"
                
                > Be an Exclusive Member Now 
                    <FontAwesomeIcon 
                        icon = {faStar}
                        className="text-violet-600 pl-2"
                    />
                </button>
            </div>
            <div className="flex justify-center flex-wrap m-4 pb-10 md:pb-20">
                <h3 className=" font-sans_medium text-white"> Have a trip for as low as $28! </h3>
            </div>
        </div>
        
    )
}