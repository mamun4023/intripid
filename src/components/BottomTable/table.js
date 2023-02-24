import React from "react"
import { faChartPie, faCheck, faCircleCheck, faClose, faComment, faGauge, faMagnifyingGlass, faMoneyBill, faUsers, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TableBackground from "../../utils/TableImage/TableBackground.svg";
import DotsImage from '../../utils/TableImage/Dots.svg';
import IntripidLogo from '../../utils/logo/footer-logo.svg';


export default function Table(){
    return(
        <div className="flex justify-center hidden xl:block">
            <div className="mt-20 w-full relative" >
                <div 
                    style={{ backgroundImage:`url(${TableBackground})` }}
                    className = "bg-contain bg-no-repeat w-[1200px] h-[800px]"
                >
                    <div className="pt-20"> 
                        <div className="flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white relative ">
                                <img 
                                    src= {DotsImage}
                                    className = "w-34 absolute top-0 left-10"
                                />
                                <div className="flex">
                                    <div className="rounded-lg p-10">                                 
                                        <div className="flex items-center justify-end mt-28 pt-1 "> 
                                            <p className="text-lg font-readex_bold text-fontColor p-2"> Speed </p>
                                            <FontAwesomeIcon 
                                                icon={faGauge}
                                                className = "text-lg text-fontColor"
                                            />
                                        </div>
                                        <div className="flex items-center justify-end py-1 "> 
                                            <p className="text-lg font-readex_bold text-fontColor p-2"> Cost </p>
                                            <FontAwesomeIcon 
                                                icon={faMoneyBill}
                                                className = "text-lg text-fontColor"
                                            />
                                        </div>
                                        <div className="flex items-center justify-end py-1"> 
                                            <p className="text-lg font-readex_bold text-fontColor p-2"> Research  </p>
                                            <FontAwesomeIcon 
                                                icon={faMagnifyingGlass}
                                                className = "text-lg text-fontColor"
                                            />
                                        </div>
                                        <div className="flex items-center justify-end py-1"> 
                                            <p className="text-lg font-readex_bold text-fontColor p-2"> Personalization  </p>
                                            <FontAwesomeIcon 
                                                icon={faChartPie}
                                                className = "text-lg text-fontColor"
                                            />
                                        </div>
                                        <div className="flex items-center justify-end py-1"> 
                                            <p className="text-lg font-readex_bold text-fontColor p-2"> Exports Match  </p>
                                            <FontAwesomeIcon 
                                                icon={faUsers}
                                                className = "text-lg text-fontColor"
                                            />
                                        </div>
                                    </div>
                            
                                    <div className="rounded-lg p-8 bg-inputBg">
                                        <div className="mb-4">
                                            <h4 className="font-readex_bold text-center text-3xl text-fontColor xl:text-3xl">Legacy Custom</h4>
                                        </div>
                                        <div className="flex justify-center mt-20 py-3"> 
                                            <p className="font-readex_bold text-lg text-error">Very Slow</p>
                                        </div>
                                        <div className="flex justify-center py-3"> 
                                            <p className="font-readex_bold text-lg text-error">Very High</p>
                                        </div>
                                        <div className="flex justify-center py-3"> 
                                            <p className="font-readex_bold text-lg text-fontColor">Medium</p>
                                        </div>
                                        <div className="flex justify-center py-3">
                                            <p className="font-readex_bold text-lg text-fontColor">Medium</p>
                                        </div>
                                        <div className="flex justify-center py-3"> 
                                        <FontAwesomeIcon 
                                            icon={faClose}
                                            className="text-red-600 text-lg"
                                        />
                                        </div>
                                    </div>
                                    <div className="rounded-lg p-8 bg-inputBg">
                                        <div className="mb-4">
                                            <h4 className="font-readex_bold text-center text-3xl text-fontColor">Legacy Packaged</h4>
                                        </div>
                                        <div className="flex justify-center py-3 mt-20"> 
                                            <p className="font-readex_bold text-lg text-fontColor">Medium</p>
                                        </div>
                                        <div className="flex justify-center py-3 "> 
                                            <p className="font-readex_bold text-lg text-fontColor">Low</p>
                                        </div>
                                        <div className="flex justify-center"> 
                                            <p className="font-readex_bold text-lg py-3  text-error">Very Low</p>
                                        </div>
                                        <div className="flex justify-center py-3">
                                            <p className="font-readex_bold text-lg text-error">Very Low</p>
                                        </div>
                                        <div className="flex justify-center"> 
                                            <FontAwesomeIcon 
                                                icon={faCheck}
                                                className="text-lg text-error py-3"
                                            />
                                        </div>
                                    </div>
                                    <div className="border border-info rounded-lg w-60 px-12 ">
                                        <div className=" py-6 flex justify-center">
                                            <img  
                                                src= {IntripidLogo} 
                                                className = "w-30"
                                            />
                                        </div>
                                        <div className="flex justify-center py-3 mt-14"> 
                                            <p className="font-readex_bold text-lg text-info">Very Fast</p>
                                        </div>
                                        <div className="flex justify-center py-3"> 
                                            <p className="font-readex_bold text-lg text-info">Very Low</p>
                                        </div>
                                        <div className="flex justify-center py-3"> 
                                            <p className="font-readex_bold text-lg text-info">Very High</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <p className="font-readex_bold text-lg text-info p-2">Very High</p>
                                        </div>
                                        <div className="flex justify-center py-3"> 
                                        <FontAwesomeIcon 
                                            icon={faCheck}
                                            className="text-lg text-info"
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                     </div> 
                </div>
            </div>
        </div>
    )
}