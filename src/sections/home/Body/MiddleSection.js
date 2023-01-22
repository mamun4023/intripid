import React, { useState } from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x1.png'
import bookingImage from '../../../utils/images/bookingImage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList, faTree, faUser } from "@fortawesome/free-solid-svg-icons";

import ProfessionalImage from '../../../utils/InteractiveImages/professional-guides.png'

export default function MiddleSection(){
    const[tab, setTab] = useState(1)

    return(
        <div>
            <div className="flex justify-center m-4 mt-10">
                <button
                    className=" bg-fontColor text-white font-sans_medium text-sm rounded-full p-2 px-8 m-2 hover:bg-violet-700 hover:text-white"
                > 
                    How Intripid works 
                </button>
            </div>
            <div className="flex justify-center m-4">
                <h1 className="font-readex_bold text-fontColor text-5xl text-center">2 Simple Steps </h1>
            </div>
            <div className="flex justify-center">
                <div className="md:w-8/12 lg:w-5/12">
                    <p className="text-md text-fontColor font-sans_regular leading-7 text-center m-2">
                        Best travel advisors powerful machine learning and cloud computing tools that evaluate thousands of cities—based on weather, attractions, travel time, flight availability—in seconds!
                    </p>
                </div>
            </div>

            <div className="flex justify-center flex-wrap lg:flex-nowrap">
                <div className="m-2">
                    <img 
                        src= {leftImage} 
                        className = "lg:pr-20 "
                    /> 
                </div>
           
                <div className="flex my-8 md:hidden">
                    <FontAwesomeIcon 
                        icon={faTree}
                        className = "text-5xl text-fontColor p-2 "
                    />
                    <h1 className="text-5xl p-2 font-readex_bold text-fontColor">Step 1</h1>
                </div>
                
                <div className="flex justify-center md:hidden">
                    <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">A customized and rigorously-evaluated suggestion procedure from an expert travel adviser will be concluded for you in as <b> little as 5-minutes with a single click.</b></p>
                </div>
                <div className="flex justify-center md:hidden">
                    <img 
                        src= {ProfessionalImage}
                        
                    />
                </div>
                <div className="flex my-8 md:hidden">
                    <FontAwesomeIcon 
                        icon={faTree}
                        className = "text-5xl text-fontColor p-2 "
                    />
                    <h1 className="text-5xl p-2 font-readex_bold text-fontColor">Step 2</h1>
                </div>
                <div className="flex justify-center md:hidden">
                    <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">An experienced Travel Advisor swoops in and reviews the results, using good-ole-human-intelligence™ to make a final recommendation.</p>
                </div>

                <div className="mt-24 w-full hidden md:block md:w-10/12 rounded-full lg:w-4/12 "> 
                    <ul className="flex list-none border-b-0 pl-0" >
                        <li 
                            onClick = {()=>setTab(1)}
                            className = {` 
                                md:w-full 
                                text-center 
                                bg-inputBg 
                                rounded-tr-xl 
                                border-b-8
                                hover:border-b-primary
                                ${tab ==1? 'border-b-primary' : 'border-b-inputBg' }
                            `}
                        >
                            <a className= "w-full block text-lg font-sans_medium my-2" >Step 1</a>
                        </li>
                        <li 
                            className = {` 
                                md:w-full 
                                text-center 
                                bg-inputBg 
                                rounded-tr-xl 
                                border-b-8
                                hover:border-b-primary
                                ${tab ==2? 'border-b-primary' : 'border-b-inputBg' }
                            `}
                            onClick = {()=> setTab(2)}
                        >
                            <a className= "w-full block text-lg font-sans_medium my-2">Step 2</a>
                        </li>
                     
                        </ul>
                        <div className="" >
                            {tab == 1? 
                                <div className="py-10"> 
                                    <div className="flex items-center" >
                                        <FontAwesomeIcon 
                                            icon={faTree}
                                            className = "text-4xl text-fontColor"
                                        />
                                        <h2 className="pl-2 font-readex_bold text-fontColor text-4xl text-slate-700"> The perfect Destination </h2>
                                    </div>
                                    <div className="py-6"> 
                                        <p className="text-md font-sans_regular text-fontColor"> A customized and rigorously-evaluated suggestion procedure from an expert travel adviser will be concluded for you in as <b> little as 5-minutes with a single click. </b></p>
                                    </div>
                                    <div>
                                        <button
                                            className="bg-violet-500 text-white rounded-full text-xs font-readex_medium px-8 p-2 mt-4"
                                        >Find Your Destination </button>    
                                    </div>
                                </div>
                            :null}
                            {tab == 2 ? 
                            <div className="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                                Tab 2 content 
                            </div>
                            : null}
                    
                        </div>
                </div>
            </div>
            {/* planning list section */}
            <div className="flex justify-center flex-wrap md:px-10 "> 
                <div className="m-2 lg:w-5/12">
                    <div>
                        <div> 
                            <h1 className="font-readex_bold text-fontColor p-4 text-5xl">
                                <FontAwesomeIcon 
                                    icon={faClipboardList}
                                    className = "text-slate-600 pr-2"
                                />
                                Planning and Booking Assistance
                            </h1>
                        </div>
                        <div className="p-4">
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
                                    className = " text-primary text-md mt-3"
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
                        <div className="flex justify-center md:justify-start md:pl-4"> 
                            <button className="bg-primary hover:bg-primaryDark text-white p-3 px-14 rounded-full font-sans_medium mt-8 " >Plan Trip With Us</button>
                        </div>        
                    </div>
                </div>
                <div className="">
                    <img 
                        src= {bookingImage} 
                        className = "lg:w-9/12"
                    />
                </div>
            </div>
        </div>
    )
}