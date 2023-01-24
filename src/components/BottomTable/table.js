import React from "react"
import { faChartPie, faCheck, faCircleCheck, faClose, faComment, faGauge, faMagnifyingGlass, faMoneyBill, faUsers, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TableBackground from "../../utils/TableImage/TableBackground.svg";
import DotsImage from '../../utils/TableImage/Dots.svg';
import IntripidLogo from '../../utils/logo/footer-logo.svg';


export default function Table(){
    return(
        <>
            <div className="flex lg:justify-center overflow-auto mt-20">
                <div 
                    style={{ backgroundImage: `url(${TableBackground})` }}
                    className = "p-10 bg-contain bg-no-repeat"
                >
                    <div className="relative -top-8 "> 
                        <div class="flex justify-center">
                            <div class="block p-10 rounded-lg shadow-lg bg-white relative ">
                                <img 
                                    src= {DotsImage}
                                    className = "w-20 absolute top-0 left-10"
                                />
                              <div className="flex overflow-x-auto">
                              <div className="rounded-lg p-5">                                 
                                    <div className="flex items-center justify-end mt-16 "> 
                                        <p className="text-xs font-readex_bold text-fontColor p-2"> Speed </p>
                                        <FontAwesomeIcon 
                                            icon={faGauge}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_bold text-fontColor p-2"> Cost </p>
                                        <FontAwesomeIcon 
                                            icon={faMoneyBill}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_bold text-fontColor p-2"> Research  </p>
                                        <FontAwesomeIcon 
                                            icon={faMagnifyingGlass}
                                            className = "text-xs text-fontColor"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end "> 
                                        <p className="text-xs font-readex_bold text-fontColor p-2"> Personalization  </p>
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
                            
                                <div className="rounded-lg p-5 bg-inputBg">
                                    <div className="mb-4">
                                        <h4 className="font-readex_bold text-center text-md text-fontColor">Legacy Custom</h4>
                                    </div>
                                    <div className="flex justify-center lg:mt-10"> 
                                        <p className="font-readex_bold text-xs text-error p-2">Very Slow</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_bold text-xs text-error p-2">Very High</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_bold text-xs text-fontColor p-2">Medium</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="font-readex_bold text-xs text-fontColor p-2">Medium</p>
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
                                        <h4 className="font-readex_bold text-md text-center text-fontColor">Legacy Packaged</h4>
                                    </div>
                                    <div className="flex justify-center lg:mt-10"> 
                                        <p className="font-readex_bold text-xs text-fontColor p-2">Medium</p>
                                    </div>
                                    <div className="flex justify-center "> 
                                        <p className="font-readex_bold text-xs text-fontColor p-2">Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_bold text-xs text-error p-2">Very Low</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="font-readex_bold text-xs text-error p-2">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <FontAwesomeIcon 
                                            icon={faCheck}
                                            className="text-sm text-error p-2"
                                        />
                                    </div>
                                </div>
                                <div className="border border-info rounded-lg p-2 w-48 ">
                                    <div className="mb-4 flex justify-center mt-5">
                                        <img  
                                            src= {IntripidLogo} 
                                            className = "w-24"
                                        />
                                    </div>
                                    <div className="flex justify-center pt-2"> 
                                        <p className="font-readex_bold text-xs text-info p-2">Very Fast</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_bold text-xs text-info p-2">Very Low</p>
                                    </div>
                                    <div className="flex justify-center"> 
                                        <p className="font-readex_bold text-xs text-info p-2">Very High</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="font-readex_bold text-xs text-info p-2">Very High</p>
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
        </>
    )
}