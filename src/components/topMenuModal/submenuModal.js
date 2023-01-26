import React, {useState}  from "react"

import { faCheck, faHandHoldingDollar, faPlane, faTree, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Destination from '../../utils/BrandIcons/SVGs/Destination.svg'

export default function Modal({open, setOpen}){
  
    return(
        <>
          
            {/* {open && 
            
           <div style={{background : 'rgb(255,25,255, 0.6)'}} className="absolute w-full h-96 "
                onClick={()=>setOpen(false)}
           >  */}
                    
                    {/* <div className="absolute top-14 z-50 ">
                        <div className="w-10/12 bg-white shadow-xl border-2 border-inputBg  rounded-xl">
                            <div className="grid grid-cols-5">
                                <div className=" col-span-2 border-r border-borderColor">
                                    <div className="flex justify-between items-center">
                                        <div className="p-5"> 
                                            <h3 className=" font-readex_bold text-3xl text-primary p-2"> Travel Solutions </h3>
                                        </div>
                                        <div className="p-5">
                                            <FontAwesomeIcon 
                                                icon={faCheck}
                                                className ="text-3xl"
                                            />
                                            <img 
                                                src= {Destination}
                                                className = "w-10 text-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-5 ">
                                        <p className="text-lg text-fontColor font-sans_regular p-2 leading-7"> 
                                            Our solutions are designed primarily to assist travelers  by providing solutions  that takes the stress and burden of the upfront leisure travel planning.
                                        </p>
                                    </div>

                                </div>
                                <div className=" col-span-3">
                                    <div className="p-5"> 
                                        <div className="flex justify-between items-center p-3 ">
                                            <p className="text-xl text-fontColor font-sans_medium"> Personalized Destinations</p>
                                            <FontAwesomeIcon 
                                                icon={faTree}

                                            />
                                        </div>
                                        <div className="flex justify-between items-center p-3 border-t border-borderColor">
                                            <p className="text-xl text-fontColor font-sans_medium"> Expert Travel Advisors</p>
                                            <FontAwesomeIcon 
                                                icon={faUserTie}
                                                className = "text-xl text-fontColor"

                                            />
                                        </div>
                                        <div className="flex justify-between items-center p-3 border-t border-borderColor">
                                            <p className="text-xl text-fontColor font-sans_medium"> Corporate Travel Planning </p>
                                            <FontAwesomeIcon 
                                                icon={faHandHoldingDollar}
                                                className = "text-xl text-fontColor"

                                            />
                                        </div>
                                        <div className="flex justify-between items-center p-3 border-t border-borderColor">
                                            <p className="text-xl text-fontColor font-sans_medium"> Travel Sponshorship </p>
                                            <FontAwesomeIcon 
                                               icon={faHandHoldingDollar}
                                               className = "text-xl text-fontColor"

                                            />
                                        </div>
                                        <div className="flex justify-between items-center p-3 border-t border-borderColor">
                                            <p className="text-xl text-fontColor font-sans_medium"> Travel Points & Reward Integration </p>
                                            <FontAwesomeIcon 
                                                icon={faPlane}
                                                className = "text-xl text-fontColor"

                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}

{/*                 
           </div>
           }
 */}


       
        </>
    )
}