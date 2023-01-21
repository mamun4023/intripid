import React,{ useState } from "react";
import {faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopAndTabletLogo from '../../../utils/logo/navigationvar-logo-desktop-and-tablet.svg';
import MobileLogo from '../../../utils/logo/navigationbar-logo-mobile.svg';
import Button from "../../../components/Button/Button";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    
    return (
        
        <nav className="w-full bg-white md:px-5 lg:px-20">
            <div className="justify-between mx-auto  md:items-center lg:flex">
                <div>
                    <div className="flex items-center justify-between  py-3 md:py-5">
                        <a href="#">
                            <img className="w-20 hidden md:w-20 md:block lg:w-28 lg:block" src= {DesktopAndTabletLogo} />
                            <img className="w-10 md:hidden ml-2" src= {MobileLogo} />
                        </a>
                        <div className="flex items-center">
                        {!navbar ? 
                            <div className=" lg:hidden"> 
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
                                    Be A Member
                                </button>
                            </div>:     
                        null}
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                        className={`flex-1 justify-self-center pb-3  lg:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center lg:flex lg:space-x-6 md:space-y-0">
                            <li className="text-gray-600 py-1 hover:text-violet-600">
                                <a className="text-xs font-sans_medium text-fontColor lg:pr-2 lg:text-sm focus:text-violet-700" href="#">About</a>
                            </li>
                            <li className="text-gray-600 py-1 hover:text-violet-600">
                                <a className="text-xs font-sans_medium text-fontColor  lg:pr-2 lg:text-sm focus:text-violet-700" href="#">Travel Solution</a>
                                <FontAwesomeIcon 
                                    icon={faChevronDown}
                                    className = "text-xs text-fontColor"
                                />
                            </li>
                            <li className="text-gray-600 py-1 hover:text-violet-600">
                                <a className=" text-xs font-sans_medium text-fontColor lg:pr-2 lg:text-sm focus:text-violet-700" href="#">Our Travelers</a>
                            </li>
                            <li className="text-gray-600 py-1 hover:text-violet-600">
                                <a className=" text-xs font-sans_medium text-fontColor lg:pr-2 lg:text-sm focus:text-violet-700" href="#">Pricing</a>
                            </li>
                            <li className="text-gray-600 py-1 hover:text-violet-600">
                                <a className=" text-xs font-sans_medium text-fontColor lg:pr-2 lg:text-sm focus:text-violet-700" href="#">FAQs</a>
                            </li>
                            <li className="hidden lg:block ">
                                <button
                                    className="
                                        bg-primary 
                                        rounded-full 
                                        p-2 
                                        px-4 
                                        text-xs 
                                        text-white
                                        hover:bg-primaryDark
                                        lg:text-sm
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
        
    );
}