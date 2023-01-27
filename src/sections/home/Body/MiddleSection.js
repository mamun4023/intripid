import React, { useState } from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x1.png'
import bookingImage from '../../../utils/images/bookingImage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList, faTree, faUser } from "@fortawesome/free-solid-svg-icons";

import ProfessionalImage from '../../../utils/InteractiveImages/professional-guides.png'
import Button from "../../../components/Button/Button";

export default function MiddleSection(){
    const[tab, setTab] = useState(1)

    return(
        <div>
            <div className="flex justify-center m-4 mt-28">
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
                <div className="px-10 md:px-0 md:w-10/12 lg:w-5/12">
                    <p className="text-md text-fontColor font-sans_regular leading-7 text-center m-2">
                        Best travel advisors powerful machine learning and cloud computing tools that evaluate thousands of cities—based on weather, attractions, travel time, flight availability—in seconds!
                    </p>
                </div>
            </div>

            <div className="flex justify-center flex-wrap lg:flex-nowrap">
                <div className="lg:px-20 lg:pl-40 lg:mt-40">
                    <img 
                        src= {leftImage} 
                        className = " lg:w-170 lg:scale-125"
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
                    {/* <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                        A customized and rigorously-evaluated suggestion procedure from an expert travel adviser will be concluded for you in as <b> little as 5-minutes with a single click.</b>
                    </p> */}
                    <p className="text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                        Answer a few, quick questions about when you’re available to travel, your budget, etc.
                    </p>
                </div>
                <div className="flex justify-center md:hidden">
                    <p className="text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                    A Travel Advisor will use your answers and Intripid’s augmented intelligence tools to analyze all the places in the world you could go and recommend the perfect destination you should go.
                    </p>
                </div>
                <div className="flex justify-center md:hidden">
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
                    {/* <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                        An experienced Travel Advisor swoops in and reviews the results, using good-ole-human-intelligence™ to make a final recommendation.
                    </p> */}
                    <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                        This is the fun part, and it can be done at your leisure.
                    </p>
                </div>

                <div className="flex justify-center md:hidden">
                    <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                        You know where & when you’re traveling, now you get to dream and plan the details of your getaway!
                    </p>
                </div>
                <div className="flex justify-center md:hidden">
                    <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                        If you want or need help, Intripid can quickly match you with a Travel Advisor who has expertise in your destination — they can help book flights, accommodations, local excursions, etc.
                    </p>
                </div>
                <div className="flex justify-center md:hidden">
                    <p className=" text-fontColor text-lg font-sans_regular leading-7 text-center p-4">
                        A Travel Advisor can often secure special deals and perks, so definitely consider hiring one!
                    </p>
                </div>


                {/* tab sections */}
                <div className=" mt-24 w-full hidden md:block rounded-full "> 
                    <ul className="flex list-none border-b-0 pl-0  md:px-10 xl:px-0 xl:pr-24" >
                        <li 
                            onClick = {()=>setTab(1)}
                            className = {` 
                                w-6/12
                                text-center 
                                bg-inputBg 
                                rounded-tr-xl 
                                border-b-8
                                hover:border-b-primary
                                ${tab ==1? 'border-b-primary' : 'border-b-inputBg' }
                            `}
                        >
                            <a className= "w-full block text-xl font-sans_medium my-2" >Step 1</a>
                        </li>
                        <li 
                            className = {` 
                                w-6/12
                                text-center 
                                bg-inputBg 
                                rounded-tr-xl 
                                border-b-8
                                hover:border-b-primary
                                ${tab ==2? 'border-b-primary' : 'border-b-inputBg' }
                            `}
                            onClick = {()=> setTab(2)}
                        >
                            <a className= "w-full block text-xl font-sans_medium my-2">Step 2</a>
                        </li>
                     
                        </ul>
                        <div className="p-10 xl:p-0 xl:pr-20" >
                            {tab == 1? 
                                <div className="py-10"> 
                                    <div className="flex items-center" >
                                        <FontAwesomeIcon 
                                            icon={faTree}
                                            className = "text-4xl text-fontColor"
                                        />
                                        <h2 className="pl-2 font-readex_bold text-fontColor text-4xl text-slate-700"> The perfect Destination </h2>
                                    </div>
                                    <div className="mt-10"> 
                                        <p className="text-md font-sans_regular text-fontColor"> 
                                            Answer a few, quick questions about when you’re available to travel, your budget, etc.
                                        </p>
                                    </div>
                                    <div className="py-4"> 
                                        <p className="text-md font-sans_regular text-fontColor"> 
                                            A Travel Advisor will use your answers and Intripid’s augmented intelligence tools to analyze all the places in the world you could go and recommend the perfect destination you should go.
                                        </p>
                                    </div>
                                    <div className="py-4"> 
                                        <p className="text-md font-sans_regular text-fontColor"> 
                                            Within 24-hours, you’ll receive an email with the recommended destination, an explanation of why it’s perfect for your trip, photos, some of the top attractions to explore there, etc.
                                        </p>
                                    </div>
                                    <div className="py-4"> 
                                        <p className="text-md font-sans_regular text-fontColor"> 
                                            If you don’t love your destination, simply request another — Intripid is so confident in our technology and advisors that you get unlimited recommendations.
                                        </p>
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
            <div className="flex justify-center flex-wrap md:px-10 mt-20 "> 
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
                        <div className="flex justify-center md:justify-start md:pl-4"> 
                           <Button 
                                title= "Plan Your Trip With Us"
                           /> 
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