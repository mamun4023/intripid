import React,{ useState } from "react";
import {faCheck, faChevronDown, faChevronUp, faTree , faUserTie, faHandHoldingDollar, faPlane, faBuilding} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopAndTabletLogo from '../../../utils/logo/navigationvar-logo-desktop-and-tablet.svg';
import MobileLogo from '../../../utils/logo/navigationbar-logo-mobile.svg';
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/TopNavbarModal";

import Destination from '../../../utils/BrandIcons/SVGs/Destination.svg';


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);

    // console.log(open)
    
    return(
        <div> 
            <div className="flex justify-center"> 
                <nav className="px-4 md:px-16 bg-white w-200">
                    <div className="justify-between mx-auto md:items-center lg:flex">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5">
                                <a href="#">
                                    <img className="w-20 hidden md:w-24 md:block lg:w-40 lg:block" src= {DesktopAndTabletLogo} />
                                    {navbar? 
                                        <img className="w-28 md:hidden" src= {DesktopAndTabletLogo} />:
                                        <img className="w-10 md:hidden" src= {MobileLogo} />
                                    }
                                </a>
                                <div className="flex items-center">
                                {!navbar ? 
                                    <div className="pr-14 md:pr-2 lg:hidden"> 
                                        <Button 
                                            title= "Be a Member"
                                        />
                                    </div>:     
                                null}
                                <div className="lg:hidden">
                                    <button
                                        className="p-2 text-fontColor rounded-md outline-none "
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-7 h-7"
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
                                                className="w-8 h-8"
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
                        <div className="ml-2 md:m-0">
                            <div
                                className={`flex-1 justify-self-center pb-3 lg:block md:pb-0 md:mt-0 ${
                                    navbar ? "block" : "hidden"
                                }`}
                            >
                                <ul className="items-center justify-center lg:flex lg:space-x-6 md:space-y-0">
                                    <li className="py-2">
                                        <a className="block text-md 2xl:text-lg font-sans_medium text-fontColor lg:text-sm border-b-2 border-white hover:border-primary " href="#">About</a>
                                    </li>
                                    <li 
                                        className="py-2"
                                        onClick={()=>{
                                            setOpen(!open)
                                            
                                        }}
                                    >
                                        <a 
                                     
                                        className="block text-md 2xl:text-lg font-sans_medium text-fontColor  lg:text-sm border-b-2 border-white hover:border-primary" href="#">
                                            Travel Solution
                                            {!open &&
                                                <FontAwesomeIcon 
                                                    icon={faChevronDown}
                                                    className = "text-xs 2xl:text-lg pl-1 text-fontColor"
                                                />
                                            }
                                            {open && 
                                                <FontAwesomeIcon 
                                                    icon={faChevronUp}
                                                    className = "text-xs 2xl:text-lg pl-1 text-fontColor"
                                                /> 
                                            }    
                                        </a>
                                    </li>
                                    {open && 
                                        <div className="lg:hidden">
                                            <DropDownContnt />
                                        </div>
                                        }
                                    <li className="py-2 ">
                                        <a className=" block text-md 2xl:text-lg font-sans_medium text-fontColor  lg:text-sm border-b-2 border-white hover:border-primary" href="#">Our Travelers</a>
                                    </li>
                                    <li className="py-2">
                                        <a className="block text-md 2xl:text-lg font-sans_medium text-fontColor  lg:text-sm border-b-2 border-white hover:border-primary " href="#">Pricing</a>
                                    </li>
                                    <li className="py-2 ">
                                        <a className=" block text-md 2xl:text-lg font-sans_medium text-fontColor lg:text-sm  border-b-2 border-white hover:border-primary" href="#">FAQs</a>
                                    </li>
                                    <li className="hidden lg:block ">
                                        <Button 
                                            title= "Be a Member"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
         {/* Top DropDown menu  modal*/}

            <div className="hidden lg:block">
            <Modal
                open={open}
                setOpen = {setOpen}
            >
                    <div 
                        className="absolute z-40 left-80"
                     
                    > 
                        <div className="w-160 bg-white shadow-xl  border-2 border-borderColor  rounded-xl">
                            <div className="shadow-inner"
                            > 
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
        <div className="h-96 overflow-y-scroll  xl:overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5  ">
                <div className="col-span-2 lg:border-r border-borderColor px-2">
                    <div className="flex justify-between items-center xl:pt-2 ">
                        <div className="px-5"> 
                            <h3 className=" font-readex_bold text-xl lg:text-2xl text-primary p-2"> Travel Solutions </h3>
                        </div>
                        <div className="p-5">
                            <img 
                                src= {Destination}
                                className = "w-8 text-primary"
                            />
                        </div>
                    </div>
                    <div className="px-5 w-100 xl:w-full ">
                        <p className="text-sm md:text-md text-fontColor font-sans_regular px-2 leading-7"> 
                            Our solutions are designed primarily to assist travelers  by providing solutions  that takes the stress and burden of the upfront leisure travel planning.
                        </p>
                    </div>
                </div>

                <div className="col-span-3">
                    <ul className="p-5"> 
                        <li className="flex justify-between items-center p-4 hover:bg-bgLight cursor-pointer ">
                            <p className=" text-sm md:text-md text-fontColor font-sans_medium"> Personalized Destinations</p>
                            <FontAwesomeIcon 
                                icon={faTree}
                            />
                        </li>
                        <li className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-bgLight cursor-pointer">
                            <p className="text-sm md:text-md text-fontColor font-sans_medium"> Expert Travel Advisors</p>
                            <FontAwesomeIcon 
                                icon={faUserTie}
                                className = "text-md text-fontColor"
                            />
                        </li>
                        <li className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-bgLight cursor-pointer">
                            <p className="text-sm md:text-md text-fontColor font-sans_medium"> Corporate Travel Planning </p>
                            <FontAwesomeIcon 
                                icon={faBuilding}
                                className = "text-sm md:text-md text-fontColor"
                            />
                        </li>
                        <li className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-bgLight cursor-pointer">
                            <p className="text-sm md:text-md text-fontColor font-sans_medium"> Travel Sponshorship </p>
                            <FontAwesomeIcon 
                                icon={faHandHoldingDollar}
                                className = "text-sm md:text-md text-fontColor"
                            />
                        </li>
                        <li className="flex justify-between items-center p-4 border-t border-borderColor hover:bg-bgLight cursor-pointer">
                            <p className="text-sm md:text-md text-fontColor font-sans_medium"> Travel Points & Reward Integration </p>
                            <FontAwesomeIcon 
                                icon={faPlane}
                                className = "text-sm md:text-md text-fontColor"
                            />
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}