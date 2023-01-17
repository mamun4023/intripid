import React from "react"
import leftImage from '../../../utils/InteractiveImages/the-perfect-destination-asset  @x1.png'
import bookingImage from '../../../utils/images/bookingImage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons";

export default function MiddleSection(){
    return(
        <div>
            <div className="flex justify-center">
            <button
                    className="bg-black text-white rounded-full p-2 pl-12 pr-12 m-2"
            > 
                    How Intripid works 
            </button>
            </div>
        
            <div className="flex justify-center">
                <h1 className="font-readex_bold text-3xl text-center">Reliable & Fast <br/> Recommendations</h1>
            </div>
            <div className="flex justify-center">
                <h1 className="font-readex_light text-sm text-center m-2">
                    Best travel advisors powerful machine learning and cloud computing tools that evaluate thousands of cities—based on weather, attractions, travel time, flight availability—in seconds!
                </h1>
            </div>

            <div className="flex justify-center">
                <div className="m-2">
                    <img src= {leftImage} /> 
                </div>
                <div className="m-2"> 
                    <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
                        role="tablist">
                        <li class="nav-item" role="presentation">
                            <a href="#tabs-home3" class="
                            nav-link
                            w-full
                            block
                            text-xs
                            leading-tight
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-6
                            py-3
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
                        <li class="nav-item" role="presentation">
                            <a href="#tabs-profile3" class="
                            nav-link
                            w-full
                            block
                            font-medium
                            text-xs
                            leading-tight
                            bg-slate-100
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-6
                            py-3
                            my-2
                            hover:border-transparent hover:bg-gray-100
                            focus:border-transparent
                            active:border-b-orange-500 border-b-4
                            " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                            aria-controls="tabs-profile3" aria-selected="false">Expert Advisors</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#tabs-messages3" class="
                            nav-link
                            w-full
                            block
                            font-medium
                            text-xs
                            leading-tight
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-6
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
                        <div class="tab-content" id="tabs-tabContent3">
                        <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                            Tab 1 content 
                        </div>
                        <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                            Tab 2 content 
                        </div>
                        <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                            Tab 3 content
                        </div>
                        </div>

                </div>
            </div>
            {/* planning list section */}
            <div className="flex justify-center"> 
                <div className="m-2">
                    <div className="mt-10">
                        <h1 className="font-readex_bold text-3xl">
                            <FontAwesomeIcon 
                                icon={faClipboardList}
                                className = "text-violet-600"
                            />
                            Planning and <br/> Booking Assistance
                        </h1>
                        <p >
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp; planning the day-to-day details of  trip
                        </p>
                        <p >
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp; booking flights, accommodations, and excursions
                        </p>
                        <p >
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp;  individual, team,  and corporate trip types and  specializations
                        </p>
                        <p >
                            <FontAwesomeIcon 
                                icon={faCheck}
                                className = "text-amber-600"
                            />
                            &nbsp;  Expert Travel Advisor at transparent hourly rates
                        </p>

                       <button className="bg-violet-600 text-white p-3 pl-12 pr-12 rounded-full m-2 " >Plan Trip With Us</button>
                    </div>
                </div>
                <div className="m-2">
                    <img src= {bookingImage} />
                </div>
            
            </div>
        </div>
    )
}