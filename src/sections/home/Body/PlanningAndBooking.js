
import React, { useState } from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x2.png'
import BookingAssistanceImage from '../../../utils/images/Planning&BookingAssistanceImage@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList, faTree, faUser } from "@fortawesome/free-solid-svg-icons";

import ProfessionalImage from '../../../utils/InteractiveImages/professional-guides.png'
import Button from "../../../components/Button/Button"
import {motion} from 'framer-motion';


const cardVariants = {
    offscreen: {
      x: '100vh'
    },
    onscreen: {
      x: 0,
    //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };


export default function PlanningAndBooking (){
    return(
        <motion.div 
            className="flex justify-center my-20"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="flex justify-center flex-wrap xl:flex-nowrap px-4 md:px-16 w-200 "> 
                <motion.div
                    variants={cardVariants}
                >
                    <div className="mt-20">
                        <div> 
                            <h1 className="font-readex_bold text-fontColor text-5xl">
                                <FontAwesomeIcon 
                                    icon={faClipboardList}
                                    className = "text-fontColor"
                                />
                                Planning and Booking Assistance
                            </h1>
                        </div>
                        <div className="py-4">
                            <div className="flex items-start"> 
                                <FontAwesomeIcon 
                                    icon={faCheck}
                                    className = " text-primary text-md mt-3"
                                />
                                <p className="text-md font-sans_regular p-2">Planning the day-to-day details of trip</p>
                            </div>
                            <div className="flex items-start"> 
                                <FontAwesomeIcon 
                                    icon={faCheck}
                                    className = "text-primary text-md mt-3"
                                />
                                <p className="text-md font-sans_regular p-2 "> Booking flights, accommodations, and excursions</p>
                            </div> 
                            <div className="flex items-start"> 
                                <FontAwesomeIcon 
                                    icon={faCheck}
                                    className = " text-primary text-md mt-3"
                                />
                                <p className="text-md font-sans_regular p-2">Individual, team,  and corporate trip types and  specializations</p>
                            </div>
                            <div className="flex items-start"> 
                                <FontAwesomeIcon 
                                    icon={faCheck}
                                    className = " text-primary text-md mt-3"
                                />
                                <p className="text-md font-sans_regular p-2"> Expert Travel Advisor at transparent hourly rates</p>
                            </div>
                        </div> 
                        <div className="flex justify-center md:justify-start"> 
                           <Button 
                                title= "Plan Your Trip With Us"
                           /> 
                        </div>        
                    </div>
                </motion.div>
                <motion.div
                    variants={cardVariants}
                >
                    <img 
                        src= {BookingAssistanceImage} 
                        className="scale-100 mt-12 md:scale-110 w-140 lg:scale-130 lg:w-150 xl:scale-110 xl:pl-10 xl:w-120"
                    />
                </motion.div>
            </div>

        </motion.div>
    )
}