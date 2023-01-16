import { faArrowDown, faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import Button from "../Button/Button";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white">
            <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="#">
                            <h2 className="text-2xl font-readex_bold">Intripid</h2>
                        </a>
                        {!navbar ?  <div className="md:hidden"> 
                            <Button title= "Be A Member" />
                        </div>: null}
                        <div className="md:hidden">
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
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a className=" text-sm " href="#">About</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a className=" text-sm pr-1" href="javascript:void(0)">Travel Solution</a>
                                <FontAwesomeIcon 
                                    icon={faChevronDown}
                                />
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a className=" text-sm " href="javascript:void(0)">Pricing</a>
                                
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a className=" text-sm" href="javascript:void(0)">FAQs</a>
                            </li>
                            <li className=" hidden md:block ">
                                <Button title= "Be A Member" />
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}