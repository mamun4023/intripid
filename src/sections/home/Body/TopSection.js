import React from "react"
import BgImage from '../../../utils/images/bgImage1.png';
import BgTopLeft from '../../../utils/images/bgTopLeft.svg';
import BgTopRight from '../../../utils/images/bgTopRight.svg';
import TravelIcon from '../../../utils/BrandIcons/Pngs/Travel 1.png';
import TravelAdvisorIcon from '../../../utils/BrandIcons/Pngs/Travel Advisor 1.png'
import TravelTicketIcon from '../../../utils/BrandIcons/Pngs/Tickets 1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {motion} from 'framer-motion';


const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
    //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


export default function TopBody(){
    return(
        <motion.div className="flex justify-center"
            initial="offscreen"
            whileInView="onscreen"

            viewport={{ once: true, amount: 0.8 }}
        > 
        <div 
            style={{ backgroundImage: `url(${BgImage})`}}
            className = "w-200 relative overflow-hidden"
        >

            <div className = "w-48 absolute -left-16 -top-8">
                <img src= {BgTopLeft} />
            </div>
            <div className = "w-40 absolute -bottom-16 -right-8">
                <img src= {BgTopRight} />
            </div>    
            
            <div className="flex justify-center pt-20 pb-10 ">
                <div className=" max-w-4xl px-8 m-7"> 
                    <h2 className="text-white text-center font-readex_bold text-4xl md:text-5xl ">Enjoy access to the world's best travel advisors & travel deals</h2>
                </div>
            </div>
             {/* center box */}
            <div className="flex justify-center flex-wrap">
                <motion.div 
                    className="block p-4 m-4 lg:m-6 rounded-3xl shadow-lg bg-white w-80 md:w-64 hover:cursor-pointer"
                    whileHover={{scale : 1.2}}
                    transition = {{duration : 0.4}}
                    variants={cardVariants}
                    
                >
                    <div className="my-2 p-2"> 
                        <img  
                            src= {TravelIcon} 
                            className = "w-20"
                        />
                    </div>
                    <div className="pr-6 p-2"> 
                        <h5 className=" text-fontColor text-2xl leading-tight font-medium mb-2 font-readex_bold">Unlimited & Personalized</h5>
                        <p className="text-md font-sans_regular text-fontColor leading-6 mt-5">
                            Members get limitless recommendations of destinations based on their customization
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    className="block p-4 m-4 lg:m-6 rounded-3xl shadow-lg bg-white w-80 md:w-64 hover:cursor-pointer"
                    whileHover={{scale : 1.2}}
                    transition = {{duration : 0.4}}
                    variants={cardVariants}
                >
                    <div className="my-2 p-2"> 
                        <img  
                            src= {TravelAdvisorIcon} 
                            className = "w-20"
                        />
                    </div>
                    
                    <div className="p-2 pr-6"> 
                        <h5 className="text-fontColor text-2xl mb-2 font-readex_bold">
                            Travel Experts Advisors 
                        </h5>
                        <p className="text-md text-fontColor font-sans_regular leading-6 mt-5">
                            No more doubts because of professional advices from seasoned travelers
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    className="block p-4 m-4 lg:m-6 rounded-3xl shadow-lg bg-white w-80 md:w-64 hover:cursor-pointer"
                    whileHover={{scale : 1.2}}
                    transition = {{duration : 0.4}}
                    variants={cardVariants}
                >
                    <div className="my-2 p-2"> 
                        <img  
                            src= {TravelTicketIcon} 
                            className = "w-20"
                        />
                    </div>
                    
                    <div className="p-2 pr-6">
                        <h5 className="text-fontColor text-2xl mb-2 font-readex_bold">
                            Killer perks & packages
                        </h5> 
                        <p className="text-md font-sans_regular leading-6 mt-5 text-fontColor">
                            Free upgrades, vouchers, flash deals, and marvelous experiences!
                        </p>
                    </div>
                </motion.div>        
            </div>
            <div className="flex justify-center flex-wrap m-4 md:mt-16">
                <motion.button
                    className="bg-white font-sans_medium text-fontColor text-black text-ms px-8  p-4 rounded-full  hover:bg-slate-200"
                    whileHover={{scale : 1.2}}
                    transition = {{duration : 0.4}}
                > Be an Exclusive Member Now 
                    <FontAwesomeIcon 
                        icon = {faStar}
                        className="text-violet-600 pl-2"
                    />
                </motion.button>
            </div>
            <div className="flex justify-center flex-wrap m-4 pb-10 mb-28 ">
                <h3 className=" font-sans_medium text-white"> Have a trip for as low as $28! </h3>
            </div>
        </div>
        </motion.div>
        
    )
}