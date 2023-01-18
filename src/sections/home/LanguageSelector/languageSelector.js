import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSelector(){
    return(
        <div className="flex flex-row-reverse max-w-5xl">
            <div className="mt-2"> 
                <FontAwesomeIcon 
                    icon={faGlobe}
                />
                <select 
                    className="
                        form-select 
                        text-sm 
                        font-sans
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
                        <option value= "English" >English</option>
                        <option value="Bangla">Bangla</option>
                </select>
            </div>
        </div>  
    )
}