import React, { useState } from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x2.png'
import BookingAssistanceImage from '../../../utils/images/Planning&BookingAssistanceImage@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList, faTree, faUser } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion';
import ProfessionalImage from '../../../utils/InteractiveImages/professional-guides.png'
import Button from "../../../components/Button/Button";
import PlanningAndBooking from "./PlanningAndBooking";
import TabSection from "./TabSection";

export default function MiddleSection(){
    const[tab, setTab] = useState(1)

    return(
        <>
            <div className="flex justify-center"> 
            <div className="w-200">
                <div className="flex justify-center mt-28">
                    <motion.button
                        className=" bg-fontColor text-white font-sans_medium text-sm rounded-full p-2 px-8 m-2 hover:bg-violet-700 hover:text-white"
                        whileHover={{scale : 1.2}}
                        transition = {{duration : 0.4}}
                    > 
                        How Intripid works 
                    </motion.button>
                </div>
                <div className="flex justify-center m-4">
                    <h1 className="font-readex_bold text-fontColor text-5xl text-center">2 Simple Steps </h1>
                </div>
                <div className="flex justify-center">
                    <div className="px-10 md:px-0 md:w-10/12 lg:w-5/12">
                        <p className="text-md text-fontColor font-sans_regular leading-7 text-center m-2">
                            Best travel advisors powerful machine learning and cloud computing tools that evaluate thousands of cities—based on weather, attractions, travel time, flight availability—in seconds!
                        </p>
                    </div>
                </div>

                {/* show for large screen */}
                <div>
                    {/* <div className="pl-20">
                        <img 
                            src= {leftImage} 
                            className="w-128"
                        /> 
                    </div> */}
                    {/* for small screen */}
                    <div className=" ">            
                        {/* <div className="flex my-8 md:hidden">
                            <FontAwesomeIcon 
                                icon={faTree}
                                className = "text-5xl text-fontColor p-2 "
                            />
                            <h1 className="text-5xl p-2 font-readex_bold text-fontColor">Step 1</h1>
                        </div> */}
                    
                        {/* <div className="flex justify-center md:hidden">
                            <p className="text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                                Answer a few, quick questions about when you’re available to travel, your budget, etc.
                            </p>
                        </div>
                        <div className="flex justify-center md:hidden">
                            <p className="text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                            A Travel Advisor will use your answers and Intripid’s augmented intelligence tools to analyze all the places in the world you could go and recommend the perfect destination you should go.
                            </p>
                        </div> */}
                        {/* <div className="flex justify-center md:hidden">
                            <p className="text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                                A Travel Advisor will use your answers and Intripid’s augmented intelligence tools to analyze all the places in the world you <b>could</b> go and recommend the perfect destination you <b>should</b> go.
                            </p>
                        </div>
                        <div className="flex justify-center md:hidden">
                            <p className="text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                                Within 24-hours, you’ll receive an email with the recommended destination, an explanation of why it’s perfect for your trip, photos, some of the top attractions to explore there, etc.
                            </p>
                        </div>
                        <div className="flex justify-center md:hidden">
                            <p className="text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                                f you don’t love your destination, simply request another — Intripid is so confident in our technology and advisors that you get unlimited recommendations.
                            </p>
                        </div> */}
                    </div>


                    <div className="flex justify-center md:hidden">
                        <img 
                            src= {ProfessionalImage}
                        />
                    </div>
                    <div className="flex justify-center my-8 md:hidden">
                        <FontAwesomeIcon 
                            icon={faTree}
                            className = "text-5xl text-fontColor p-2 "
                        />
                        <h1 className="text-5xl p-2 font-readex_bold text-fontColor">Step 2</h1>
                    </div>
                    {/* <div className="flex justify-center md:hidden">
                
                        <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                            This is the fun part, and it can be done at your leisure.
                        </p>
                    </div> */}

                    {/* <div className="flex justify-center md:hidden">
                        <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                            You know where & when you’re traveling, now you get to dream and plan the details of your getaway!
                        </p>
                    </div> */}
                    {/* <div className="flex justify-center md:hidden">
                        <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                            If you want or need help, Intripid can quickly match you with a Travel Advisor who has expertise in your destination — they can help book flights, accommodations, local excursions, etc.
                        </p>
                    </div> */}
                    {/* <div className="flex justify-center md:hidden">
                        <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                            A Travel Advisor can often secure special deals and perks, so definitely consider hiring one!
                        </p>
                    </div> */}
                            
                </div>
            </div>
            </div>
            
            <TabSection />
          
            <PlanningAndBooking />
        </>
    )
}