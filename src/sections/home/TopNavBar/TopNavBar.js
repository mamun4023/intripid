import React,{ useState } from "react";
import {faCheck, faChevronDown, faTree , faUserTie, faHandHoldingDollar, faPlane} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopAndTabletLogo from '../../../utils/logo/navigationvar-logo-desktop-and-tablet.svg';
import MobileLogo from '../../../utils/logo/navigationbar-logo-mobile.svg';
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/modal";

import Destination from '../../../utils/BrandIcons/SVGs/Destination.svg';



export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState();
    
    return(
        <div> 
        <nav className="w-full px-3 bg-white md:px-10 lg:px-24">
            <div className="justify-between mx-auto  md:items-center lg:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5">
                        <a href="#">
                            <img className="w-20 hidden md:w-24 md:block lg:w-40 lg:block" src= {DesktopAndTabletLogo} />
                            <img className="w-10 md:hidden ml-2" src= {MobileLogo} />
                        </a>
                        <div className="flex items-center">
                        {!navbar ? 
                            <div className="pr-14 md:pr-2 lg:hidden"> 
                                <button
                                    className="
                                        bg-primary 
                                        rounded-full
                                        font-sans_medium
                                        p-3 
                                        px-6 
                                        text-xs 
                                        text-white
                                        hover:bg-primaryDark
                                        lg:text-sm
                                    "
                                > 
                                    Be a Member
                                </button>
                            </div>:     
                        null}
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-fontColor rounded-md outline-none focus:border-fontColor focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="ml-2 md:m-0 ">
                    <div
                        className={`flex-1 justify-self-center pb-3 lg:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center lg:flex lg:space-x-6 md:space-y-0">
                            <li className="py-2 border-b-2 border-white hover:border-primary">
                                <a className="text-sm 2xl:text-lg font-sans_medium text-fontColor lg:pr-2 lg:text-sm " href="#">About</a>
                            </li>
                            <li 
                                className="py-2 border-b-2 border-white hover:border-primary"
                                onClick={()=>setOpen(prev => !prev)}
                            >
                                <a className="text-sm 2xl:text-lg font-sans_medium text-fontColor  lg:pr-2 lg:text-sm" href="#">Travel Solution</a>
                                <FontAwesomeIcon 
                                    icon={faChevronDown}
                                    className = "text-xs 2xl:text-lg text-fontColor"
                                />
                               
                            </li>
                            {open && 
                                <div className="lg:hidden">
                                    <DropDownContnt />
                                </div>
                                }
                            <li className="py-2 border-b-2 border-white hover:border-primary">
                                <a className=" text-sm 2xl:text-lg font-sans_medium text-fontColor lg:pr-2 lg:text-sm " href="#">Our Travelers</a>
                            </li>
                            <li className="py-2 border-b-2 border-white hover:border-primary">
                                <a className="text-sm 2xl:text-lg font-sans_medium text-fontColor lg:pr-2 lg:text-sm " href="#">Pricing</a>
                            </li>
                            <li className="py-2 border-b-2 border-white hover:border-primary">
                                <a className=" text-sm 2xl:text-lg font-sans_medium text-fontColor lg:pr-2 lg:text-sm " href="#">FAQs</a>
                            </li>
                            <li className="hidden lg:block ">
                                <button
                                    className="
                                        bg-primary 
                                        rounded-full 
                                        p-3 
                                        2xl:p-4
                                        px-10
                                        2xl:px-10 
                                        text-xs
                                        text-white
                                        hover:bg-primaryDark
                                        lg:text-sm
                                        2xl:text-lg
                                    "
                                > 
                                    Be A Member
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

          
        </nav>
          {/* submenu  modal*/}

        <div className=" hidden lg:block">
          <Modal
            open={open}
            setOpen = {setOpen}
          >
                <div className=" absolute lg:left-96"> 
                    <div className="w-10/12 bg-white shadow-xl  border-2 border-inputBg  rounded-xl">
                         <div className=" shadow-inner"> 
                         <DropDownContnt />
                         </div>
                    </div>
                </div>
                    
          </Modal>
        </div>
        </div>
        
    );
}



const DropDownContnt = ()=>{
    return(
        <div className=" overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 ">
                <div className=" col-span-2 border-r border-borderColor">
                    <div className="flex justify-between items-center">
                        <div className="p-5"> 
                            <h3 className=" font-readex_bold text-2xl text-primary p-2"> Travel Solutions </h3>
                        </div>
                        <div className="p-5">
                            <img 
                                src= {Destination}
                                className = "w-8 text-primary"
                            />
                        </div>
                    </div>
                    <div className="px-5 ">
                        <p className="text-md text-fontColor font-sans_regular p-2 leading-7"> 
                            Our solutions are designed primarily to assist travelers  by providing solutions  that takes the stress and burden of the upfront leisure travel planning.
                        </p>
                    </div>
                </div>

                <div className=" col-span-3">
                    <div className="p-5"> 
                        <div className="flex justify-between items-center p-4 hover:bg-inputBg cursor-pointer ">
                            <p className="text-md text-fontColor font-sans_medium"> Personalized Destinations</p>
                            <FontAwesomeIcon 
                                icon={faTree}
                            />
                        </div>
                        <div className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-inputBg cursor-pointer">
                            <p className="text-md text-fontColor font-sans_medium"> Expert Travel Advisors</p>
                            <FontAwesomeIcon 
                                icon={faUserTie}
                                className = "text-md text-fontColor"
                            />
                        </div>
                        <div className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-inputBg cursor-pointer">
                            <p className="text-md text-fontColor font-sans_medium"> Corporate Travel Planning </p>
                            <FontAwesomeIcon 
                                icon={faHandHoldingDollar}
                                className = "text-md text-fontColor"
                            />
                        </div>
                        <div className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-inputBg cursor-pointer">
                            <p className="text-md text-fontColor font-sans_medium"> Travel Sponshorship </p>
                            <FontAwesomeIcon 
                                icon={faHandHoldingDollar}
                                className = "text-md text-fontColor"
                            />
                        </div>
                        <div className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-inputBg cursor-pointer">
                            <p className="text-md text-fontColor font-sans_medium"> Travel Points & Reward Integration </p>
                            <FontAwesomeIcon 
                                icon={faPlane}
                                className = "text-xl text-fontColor"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}