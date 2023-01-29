import { faChartPie, faCheck, faCircleCheck, faClose, faComment, faGauge, faMagnifyingGlass, faUsers, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import { faComments } from "@fortawesome/free-regular-svg-icons";
import BottomTable from '../../../components/BottomTable/table'
import Slider from '../../../components/slider/slider'
import Button from "../../../components/Button/Button";

export default function BottomSection(){
    return(
        <div className="flex justify-center"> 
        <div className="m-10 mt-20">
            <div className="flex justify-center">
                <button className="bg-fontColor font-sans_medium text-xs text-white m-2 p-2 px-8 rounded-full" >How Intripid Compares</button>
            </div>
            <div className="flex justify-center px-2">
                <h1 className="text-3xl text-center text-fontColor font-readex_bold">Better, Affordable, and Faster Travels with Us </h1>
            </div>

            {/* table */}
            <BottomTable />
            
            <div className="flex justify-center flex-wrap mt-10">
                <div class="block p-8 m-4 rounded-lg shadow-md bg-inputBg w-64">
                    <h5 class="text-2xl font-readex_bold text-error mb-2">
                        Legacy Custom— but expensive!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-md pl-2"
                        />
                    </h5>
                    <p class=" font-sans_regular text-fontColor text-md pt-4">
                        Takes hundreds of dollars to employ an agent who will spend hours—or even days!—researching a small number of potential locations.
                    </p>
                </div>
                <div class="block p-7 m-4  rounded-lg shadow-md bg-inputBg w-64">
                    <h5 class="text-2xl font-readex_bold text-error mb-2">
                        Legacy Pre-Packaged—not customized!
                        <FontAwesomeIcon 
                            icon={faXmarkCircle}
                            className = "text-md pl-2"
                        />
                    </h5>
                    <p className="font-sans_regular text-fontColor text-md pt-4">
                        A  microwave dinner of a trip - these are travel packages built to sell at volume, built for...definitely not you!
                    </p>
                </div>
                <div class="block p-7 m-4 rounded-lg shadow-md bg-inputBg w-64 border border-info">
                    <h5 className="font-readex_bold text-info text-2xl">
                        Personalized, Fast, and Affordable Intripid!
                        <FontAwesomeIcon 
                            icon={faCircleCheck}
                            className = "text-info pl-2"
                        />
                    </h5>
                    <p className = "font-sans_regular text-fontColor text-md pt-4">
                        Intripid 's proprietary tech enables highly-personalized results, delivered fast - and at super-low cost
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <Button 
                    title= "Our Affordable Pricing"
                />
            </div>

            <div className="flex justify-center mt-20">
                <div className="flex items-center flex-wrap justify-center"> 
                    <h2 className="text-4xl text-fontColor font-readex_bold text-center">
                        What They Say About <span className="text-info"> Intripid </span>
                    </h2>
                    <FontAwesomeIcon 
                        icon={faComments}
                        className = "text-4xl pl-2 text-fontColor"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Slider />
            </div>
            <div className="flex justify-center my-20">
                <Button 
                    title= "See Our Travelers' Adventures"
                />
            </div>
        </div>
        </div>
    )
}
