import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSelector(){
    return(
        <div className="flex flex-row-reverse p-2 pr-3 bg-bgLight">
            <div> 
                <FontAwesomeIcon 
                    icon={faGlobe}
                    className = "text-sm text-fontColor"
                />
                <select 
                    className="
                        form-select 
                        text-sm
                        font-sans_regular
                        text-gray-700
                        bg-white
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white 
                        focus:border-violet-600 
                        focus:outline-violet-600" 
                        aria-label="Default select example"
                    >
                        <option className="text-fontColor" value= "English" >English</option>
                        <option className="text-fontColor" value="Bangla">Bangla</option>
                </select>
            </div>
        </div>  
    )
}