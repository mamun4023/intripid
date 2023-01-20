import { faChartPie, faCheck, faClose, faComment, faGauge, faMagnifyingGlass, faUsers, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
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
                <button className="bg-black text-xs text-white m-2 p-2 px-8 rounded-full" >How Intripid Compares</button>
            </div>

            <div className="flex justify-center">
                <h1 className="text-2xl text-slate-600 font-readex_bold">Better, Affordable, and Faster Travels with Us </h1>
            </div>
            <div className="flex justify-center mt-10 overflow-auto">
                <div 
                    style={{ backgroundImage: `url(${TableBackground})` }}
                    className = "p-10 bg-contain bg-no-repeat"
                >
                    <div className=" relative -top-8"> 
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
                                        <p className="text-slate-700 p-2 text-xs font-readex_medium"> Speed </p>
                                        <FontAwesomeIcon 
                                            icon={faGauge}
                                            className = "text-xs text-slate-700"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-slate-700 p-2 text-xs font-readex_medium"> Cost </p>
                                        <FontAwesomeIcon 
                                            icon={faGauge}
                                            className = "text-xs text-slate-700"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-slate-700 p-2 text-xs font-readex_medium"> Research  </p>
                                        <FontAwesomeIcon 
                                            icon={faMagnifyingGlass}
                                            className = "text-xs text-slate-700"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-slate-700 p-2 text-xs font-readex_medium"> Personalization  </p>
                                        <FontAwesomeIcon 
                                            icon={faChartPie}
                                            className = "text-xs text-slate-700"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-slate-700 p-2 text-xs font-readex_medium"> Exports Match  </p>
                                        <FontAwesomeIcon 
                                            icon={faUsers}
                                            className = "text-xs text-slate-700"
                                        />
                                    </div>
                              
                                   
                                </div>
                            
                                <div className="rounded-lg p-5 bg-slate-50  ">
                                    <div className="mb-4">
                                        <h4 className=" font-readex_bold text-sm" >Legacy Custom</h4>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-red-600 p-2 font-readex_medium text-xs">Very Slow</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-red-600 p-2 font-readex_medium text-xs">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs">Medium</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs">Medium</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                    <FontAwesomeIcon 
                                        icon={faClose}
                                        className="text-red-600 p-2 text-sm"
                                    />
                                    </div>
                                </div>
                                <div className="rounded-lg p-5 bg-slate-50">
                                    <div className="mb-4">
                                        <h4 className="font-readex_bold text-sm ">Legacy Packaged</h4>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs">Medium</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs">Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-red-600 p-2 font-readex_medium text-xs">Very Low</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-red-600 p-2 font-readex_medium text-xs ">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <FontAwesomeIcon 
                                            icon={faCheck}
                                            className="text-violet-600 p-2 text-sm"
                                        />
                                    </div>
                                </div>
                                <div style={{borderWidth : 1}} className=" border-violet-600 rounded-lg p-5 px-10 ">
                                    <div className="mb-4 flex justify-center">
                                        <img  
                                            src= {IntripidLogo} 
                                            className = " w-16"
                                        />
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs ">Very Fast</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs">Very High</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-violet-600 p-2 font-readex_medium text-xs">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                    <FontAwesomeIcon 
                                        icon={faCheck}
                                        className="text-violet-600 p-2 text-sm"
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
                <div class="block p-6 m-2 rounded-lg shadow-lg bg-slate-100 max-w-xs">
                    <h5 class="text-red-600 text-md leading-tight font-medium mb-2">
                        Legacy Custom— <br/>but expensive!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-md pl-2"
                        />
                    </h5>
                    <p style={{fontSize : 12}} class="text-gray-700  mb-4 font-readex_light">
                        Takes hundreds of dollars to employ an agent who will spend hours—or even days!—researching a small number of potential locations.
                    </p>
                </div>
                <div class="block p-6 m-2  rounded-lg shadow-lg bg-slate-100 max-w-xs">
                    <h5 class="text-red-600 text-md leading-tight font-medium mb-2">
                        Legacy Pre-Packaged— <br/>not customized!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-md pl-2"
                        />
                    </h5>
                    <p style={{fontSize : 12}} class="text-gray-700  mb-4 font-readex_light">
                        A  microwave dinner of a trip - these are travel packages built to sell at volume, built for...definitely not you!
                    </p>
                </div>
                <div class="block p-6 m-2 rounded-lg shadow-lg bg-slate-100 max-w-xs">
                    <h5 class="text-violet-600 text-md leading-tight font-medium mb-2 ">
                        Personalized, Fast, and  <br/> Affordable!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-violet-600 text-md pl-2"
                        />
                    </h5>
                    <p style={{fontSize : 12}} class="text-gray-700  mb-4 font-readex_light">
                        Intripid 's proprietary tech enables highly-personalized results, delivered fast - and at super-low cost
                    </p>
                </div>
            </div>

            <div  className="flex justify-center mt-10">
                <button className="bg-violet-500 text-white text-xs px-8 p-2 rounded-full hover:bg-violet-700">Our Affordable Pricing</button>
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex items-center flex-wrap justify-center"> 
                    <h2 className="text-3xl text-slate-700 font-readex_bold text-center">
                        What They Say About <span className="text-violet-500"> Intripid </span>
                    </h2>
                    <FontAwesomeIcon 
                        icon={faComments}
                        className = "text-2xl pl-2"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                {/* <Slider /> */}
            </div>
            <div  className="flex justify-center mt-10">
                <button className="bg-violet-500 text-white text-xs px-8 p-2 rounded-full hover:bg-violet-700">See Our Travelers' Adventures </button>
            </div>
        </div>
    )
}
