import { faCheck, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import TableBackground from "../../../utils/TableImage/TableBackground.svg"
import IntripidLogo from '../../../utils/logo/navigationvar-logo-desktop-and-tablet.svg'


export default function BottomSection(){
    return(
        <div>
            <div className="flex justify-center">
                <button className="bg-black text-white m-2 p-2 pl-12 pr-12 rounded-full" >How Intripid Compares</button>
            </div>

            <div className="flex justify-center">
                <h1 className="text-3xl font-readex_bold">Better, Affordable, and <br/> Faster Travels with Us </h1>
            </div>
            <div className="flex justify-center">
                <div 
                    style={{ backgroundImage: `url(${TableBackground})` }}
                    className = "p-10 bg-contain bg-no-repeat"
                >
                    <div className=" relative -top-8"> 
                        <div class="flex justify-center">
                            <div class="block p-6 rounded-lg shadow-lg bg-white ">
                              <div className="flex">
                              <div className=" border-violet-600 border-2 rounded-lg p-5 ">
                                    <div className="mb-4">
                                        <h4>Legacy Customed</h4>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Fast</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                    <FontAwesomeIcon 
                                        icon={faCheck}
                                        className="text-violet-600 p-2 text-sm"
                                    />
                                    </div>
                                </div>
                            
                                <div className=" border-violet-600 border-2 rounded-lg p-5 ">
                                    <div className="mb-4">
                                        <h4>Legacy Customed</h4>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Fast</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                    <FontAwesomeIcon 
                                        icon={faCheck}
                                        className="text-violet-600 p-2 text-sm"
                                    />
                                    </div>
                                </div>
                                <div className=" border-violet-600 border-2 rounded-lg p-5 ">
                                    <div className="mb-4">
                                        <h4>Legacy Customed</h4>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Fast</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                    <FontAwesomeIcon 
                                        icon={faCheck}
                                        className="text-violet-600 p-2 text-sm"
                                    />
                                    </div>
                                </div>
                                <div className=" border-violet-600 border-2 rounded-lg p-5 ">
                                    <div className="mb-4">
                                        <img  src= {IntripidLogo} />
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Fast</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-violet-600 p-2 text-sm">Very High</p>
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

            <div className="flex justify-center flex-wrap">
                <div class="block p-6 m-2 rounded-lg shadow-lg bg-slate-100 max-w-sm">
                    <h5 class="text-red-600 text-xl leading-tight font-medium mb-2">
                        Legacy Custom— <br/>but expensive!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                        />
                    </h5>
                    <p style={{fontSize : 12}} class="text-gray-700  mb-4 font-readex_light">
                        Takes hundreds of dollars to employ an agent who will spend hours—or even days!—researching a small number of potential locations.
                    </p>
                </div>
                <div class="block p-6 m-2  rounded-lg shadow-lg bg-slate-100 max-w-sm">
                    <h5 class="text-red-600 text-xl leading-tight font-medium mb-2">
                        Legacy Pre-Packaged— <br/>not customized!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                        />
                    </h5>
                    <p style={{fontSize : 12}} class="text-gray-700  mb-4 font-readex_light">
                        A  microwave dinner of a trip - these are travel packages built to sell at volume, built for...definitely not you!
                    </p>
                </div>
                <div class="block p-6 m-2 rounded-lg shadow-lg bg-slate-100 max-w-sm">
                    <h5 class="text-violet-600 text-xl leading-tight font-medium mb-2 ">
                        Personalized, Fast, and  <br/> Affordable!—Intripid circle-check
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-violet-600"
                        />
                    </h5>
                    <p style={{fontSize : 12}} class="text-gray-700  mb-4 font-readex_light">
                    Intripid 's proprietary tech enables highly-personalized results, delivered fast - and at super-low cost
                    </p>
                </div>
            </div>
        </div>
    )
}
