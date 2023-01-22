import { faChartPie, faCheck, faCircleCheck, faClose, faComment, faGauge, faMagnifyingGlass, faUsers, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import TableBackground from "../../../utils/TableImage/TableBackground.svg"
import IntripidLogo from '../../../utils/logo/navigationvar-logo-desktop-and-tablet.svg'
import DotsImage from '../../../utils/TableImage/Dots.svg'
import { faComments } from "@fortawesome/free-regular-svg-icons";
import Slider from '../../../components/slider/slider'

export default function BottomSection(){
    return(
        <div className="m-10">
            <div className="flex justify-center">
                <button className="bg-fontColor font-sans_medium text-xs text-white m-2 p-2 px-8 rounded-full" >How Intripid Compares</button>
            </div>
            <div className="flex justify-center mt-8">
                <h1 className="text-5xl text-center text-fontColor font-readex_bold">Better, Affordable, and Faster Travels with Us </h1>
            </div>
            <div className="flex justify-center mt-10 overflow-auto">
                <div 
                    style={{ backgroundImage: `url(${TableBackground})` }}
                    className = "p-10 bg-contain bg-no-repeat"
                >
                    <div className="relative -top-8"> 
                        <div class="flex justify-center">
                            <div class="block p-10 rounded-lg shadow-lg bg-white relative ">
                                <img 
                                    src= {DotsImage}
                                    className = "w-20 absolute top-0 left-10"
                                />
                              <div className="flex">
                              <div className="rounded-lg p-5 ">
                                    <div className="mb-9">
                                        
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_bold text-fontColor p-2"> Speed </p>
                                        <FontAwesomeIcon 
                                            icon={faGauge}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_medium text-fontColor p-2"> Cost </p>
                                        <FontAwesomeIcon 
                                            icon={faGauge}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_medium text-fontColor p-2"> Research  </p>
                                        <FontAwesomeIcon 
                                            icon={faMagnifyingGlass}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_medium text-fontColor p-2"> Personalization  </p>
                                        <FontAwesomeIcon 
                                            icon={faChartPie}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_bold text-fontColor p-2"> Exports Match  </p>
                                        <FontAwesomeIcon 
                                            icon={faUsers}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                              
                                   
                                </div>
                            
                                <div className="rounded-lg p-5 bg-inputBg  ">
                                    <div className="mb-4">
                                        <h4 className=" font-readex_bold text-center text-md text-fontColor">Legacy Custom</h4>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-error p-2">Very Slow</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-error p-2">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-fontColor p-2">Medium</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="font-readex_medium text-xs text-fontColor p-2">Medium</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                    <FontAwesomeIcon 
                                        icon={faClose}
                                        className="text-red-600 p-2 text-sm"
                                    />
                                    </div>
                                </div>
                                <div className="rounded-lg p-5 bg-inputBg">
                                    <div className="mb-4">
                                        <h4 className="font-readex_bold text-md text-fontColor">Legacy Packaged</h4>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-fontColor p-2">Medium</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-fontColor p-2">Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-error p-2">Very Low</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="font-readex_medium text-xs text-error p-2">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <FontAwesomeIcon 
                                            icon={faCheck}
                                            className="text-sm text-error p-2"
                                        />
                                    </div>
                                </div>
                                <div style={{borderWidth : 1}} className=" border-fontColor rounded-lg p-2 px-8 w-60 ">
                                    <div className="mb-4 flex justify-center mt-5">
                                        <img  
                                            src= {IntripidLogo} 
                                            className = "w-20"
                                        />
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-info p-2">Very Fast</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-info p-2">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_medium text-xs text-info p-2">Very High</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="font-readex_medium text-xs text-info p-2">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                    <FontAwesomeIcon 
                                        icon={faCheck}
                                        className="text-sm text-info p-2"
                                    />
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>    
                     </div>
                </div>
            </div>

            <div className="flex justify-center flex-wrap mt-10">
                <div class="block p-7 m-2 rounded-lg shadow-md bg-inputBg max-w-xs">
                    <h5 class="text-xl font-readex_bold text-error mb-2">
                        Legacy Custom— but expensive!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-md pl-2"
                        />
                    </h5>
                    <p class=" font-sans_regular text-fontColor text-sm pt-4">
                        Takes hundreds of dollars to employ an agent who will spend hours—or even days!—researching a small number of potential locations.
                    </p>
                </div>
                <div class="block p-7 m-2  rounded-lg shadow-md bg-inputBg max-w-xs">
                    <h5 class="text-xl font-readex_bold text-error mb-2">
                        Legacy Pre-Packaged—not customized!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-md pl-2"
                        />
                    </h5>
                    <p className="font-sans_regular text-fontColor text-sm pt-4">
                        A  microwave dinner of a trip - these are travel packages built to sell at volume, built for...definitely not you!
                    </p>
                </div>
                <div class="block p-7 m-2 rounded-lg shadow-md bg-inputBg max-w-xs border border-info">
                    <h5 className="font-readex_bold text-info text-xl">
                        Personalized, Fast, and Affordable Intripid!
                        <FontAwesomeIcon 
                            icon={faCircleCheck}
                            className = "text-info pl-2"
                        />
                    </h5>
                    <p className = "font-sans_regular text-fontColor text-sm pt-4">
                        Intripid 's proprietary tech enables highly-personalized results, delivered fast - and at super-low cost
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <button className="bg-primary text-white font-sans_medium text-xs px-14 p-3 rounded-full hover:bg-primaryDark">Our Affordable Pricing</button>
            </div>

            <div className="flex justify-center mt-20">
                <div className="flex items-center flex-wrap justify-center"> 
                    <h2 className="text-4xl text-fontColor font-readex_bold text-center">
                        What They Say About <span className="text-info"> Intripid </span>
                    </h2>
                    <FontAwesomeIcon 
                        icon={faComments}
                        className = "text-4xl pl-2 text-fontColor"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                {/* <Slider /> */}
            </div>
            <div className="flex justify-center my-10">
                <button className="bg-primary hover:bg-primaryDark font-sans_medium text-white text-xs px-12 p-3 rounded-full hover:bg-violet-700">See Our Travelers' Adventures </button>
            </div>
        </div>
    )
}
