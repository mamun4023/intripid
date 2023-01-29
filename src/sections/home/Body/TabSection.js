import React, { useState } from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x2.png'
import BookingAssistanceImage from '../../../utils/images/Planning&BookingAssistanceImage@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList, faTree, faUser } from "@fortawesome/free-solid-svg-icons";


export default function TabSection(){
    const[tab, setTab] = useState(1)

    return(
        
        <div className="flex justify-center ">
            <div className="w-200 xl:px-16"> 
            <div className="flex justify-between flex-wrap xl:flex-nowrap">
                <div className="">
                    <img 
                        src= {leftImage}
                        className = "w-140" 
                        
                    /> 
                </div>
                
                <div className=" mt-24 hidden md:block rounded-full "> 
                    <ul className="flex list-none border-b-0 pl-0" >
                        <li 
                            onClick = {()=>setTab(1)}
                            className = {` 
                                w-80
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
                                w-80
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
                        <div className="" >
                            {tab == 1? 
                                <div className="py-10 w-140 "> 
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
                            <div className="py-10 w-140">
                                Tab 2 content 
                            </div>
                            : null}
                    
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}