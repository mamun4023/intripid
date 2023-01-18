import React from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x1.png'
import bookingImage from '../../../utils/images/bookingImage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons";


export default function MiddleSection(){
    
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
                    <ul className="nav nav-tabs flex list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
                        role="tablist">
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-home3" className="
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
                            border-b-orange-500
                            border-b-4
                            active:border-b-orange-500 border-b-4
                            " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                            aria-selected="true">Personalized</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-profile3" className="
                            nav-link
                            w-40
                            block
                            font-medium
                            text-xs
                            leading-tight
                            bg-slate-100
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-2
                            py-3
                            my-2
                            hover:border-transparent hover:bg-gray-100
                            focus:border-transparent
                            active:border-b-orange-500 border-b-4
                            "id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                            aria-controls="tabs-profile3" aria-selected="false">Expert Advisors</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-messages3" className="
                            nav-link
                            w-40
                            block
                            font-medium
                            text-xs
                            leading-tight
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-2
                            py-3
                            my-2
                            bg-slate-100
                            hover:border-transparent hover:bg-gray-100
                            focus:border-transparent
                            active:border-b-orange-500 border-b-4
                            
                            
                            " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                            aria-controls="tabs-messages3" aria-selected="false">Limitless Results</a>
                        </li>
                        </ul>
                        <div className="tab-content" id="tabs-tabContent3">
                        <div className="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                            Tab 1 content 
                        </div>
                        <div className="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                            Tab 2 content 
                        </div>
                        <div className="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                            Tab 3 content
                        </div>
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