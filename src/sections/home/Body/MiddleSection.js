import React, { useState } from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x1.png'
import bookingImage from '../../../utils/images/bookingImage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons";


export default function MiddleSection(){
    const[tab, setTab] = useState(1)

    return(
        <div>
            <div className="flex justify-center m-4 mt-10">
            <button
                className="bg-black text-white text-sm rounded-full p-2 pl-12 pr-12 m-2"
            > 
                How Intripid works 
            </button>
            </div>
        
            <div className="flex justify-center m-4">
                <h1 className="font-readex_bold text-slate-700 text-5xl text-center">Reliable & Fast <br/> Recommendations</h1>
            </div>
            <div className="flex justify-center">
                <h1 className="font-readex_light text-sm text-center m-2">
                    Best travel advisors powerful machine learning and cloud computing tools that evaluate thousands of cities—based on <br/> weather, attractions, travel time, flight availability—in seconds!
                </h1>
            </div>

            <div className="flex justify-center flex-wrap">
                <div className="m-2">
                    <img 
                        src= {leftImage} 
                        className = "h-96"
                    /> 
                </div>
                <div className="m-2"> 
                    <ul className="nav nav-tabs flex list-none border-b-0 pl-0 mb-4" >
                        <li 
                            className="nav-item" 
                            role="presentation"
                            onClick = {()=>setTab(1)}
                        >
                        <a className={` 
                            nav-link
                            w-full
                            block
                            text-xs
                            leading-tight
                            border-x-0 border-t-0 border-transparent
                            px-2
                            py-2
                            my-2
                            bg-slate-100
                            hover:border-transparent hover:bg-gray-100
                            focus:border-transparent
                            hover:cursor-pointer
                            hover:border-b-orange-500 
                            border-b-4
                            active:border-b-orange-500 border-b-4
                            ${tab ==1? ' border-b-orange-500' : null}
                        `}
                            >Personalized</a>
                        </li>
                        <li 
                            className = "nav-item" 
                            role = "presentation"
                            onClick = {()=> setTab(2)}
                        >
                            <a className= {`
                                nav-link
                                 w-full
                                 block
                                 text-xs
                                 leading-tight
                                 border-x-0 border-t-0 border-transparent
                                 px-2
                                 py-2
                                 my-2
                                 bg-slate-100
                                 hover:border-transparent hover:bg-gray-100
                                 focus:border-transparent
                                 hover:cursor-pointer
                                 hover:border-b-orange-500 
                                 border-b-4
                                 active:border-b-orange-500 border-b-4 
                                ${tab ==2? ' border-b-orange-500' : null}
                            `}

                            
                           >Expert Advisors</a>
                        </li>
                        <li 
                            className="nav-item" 
                            role="presentation"
                            onClick={()=>setTab(3)}
                        >
                            <a className={` 
                                    nav-link
                                    w-full
                                    block
                                    text-xs
                                    leading-tight
                                    border-x-0 border-t-0 border-transparent
                                    px-2
                                    py-2
                                    my-2
                                    bg-slate-100
                                    hover:border-transparent hover:bg-gray-100
                                    focus:border-transparent
                                    hover:cursor-pointer 
                                    hover:border-b-orange-500 
                                    border-b-4
                                    active:border-b-orange-500 border-b-4
                                    ${tab == 3? ' border-b-orange-500' : null}
                                `}
                           >Limitless Results</a>
                        </li>
                        </ul>
                        <div className="tab-content" >
                            {tab == 1? 
                            <div className="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                                Tab 1 content 
                            </div>: null}
                            {tab == 2 ? 
                            <div className="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                                Tab 2 content 
                            </div>
                            : null}
                            {tab ==3 ? 
                            <div className="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                                Tab 3 content
                            </div>
                            : null}
                        </div>

                </div>
            </div>
            {/* planning list section */}
            <div className="flex justify-center flex-wrap"> 
                <div className="m-2">
                    <div className="mt-10">
                        <h1 className="font-readex_bold text-slate-600 text-3xl">
                            <FontAwesomeIcon 
                                icon={faClipboardList}
                                className = "text-slate-600 pr-2"
                            />
                            Planning and <br/> Booking Assistance
                        </h1>
                        <p className="text-sm p-2 mt-4">
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp; Planning the day-to-day details of  trip
                        </p>
                        <p className="text-sm p-2">
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp; Booking flights, accommodations, and excursions
                        </p>
                        <p className="text-sm p-2">
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp;  Individual, team,  and corporate trip types and  specializations
                        </p>
                        <p className="text-sm p-2"> 
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp;  Expert Travel Advisor at transparent hourly rates
                        </p>

                       <button className="bg-violet-600 text-white p-2 px-8 rounded-full mt-8 hover:bg-violet-700 " >Plan Trip With Us</button>
                    </div>
                </div>
                <div className="m-2">
                    <img 
                        src= {bookingImage} 
                        className = "h-96"
                    />
                </div>
            
            </div>
        </div>
    )
}