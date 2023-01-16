import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function LanguageSelector(){
    return(
      
        <div className="bg-slate-100 flex flex-row-reverse">
            <div className=""> 
                <FontAwesomeIcon 
                    icon={faGlobe}
                />
                <select 
                    class="form-select text-base
                        font-normal
                        text-gray-700
                        bg-slate-100 bg-clip-padding bg-no-repeatrounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option value= "English" selected>English</option>
                    <option value="Bangla">Bangla</option>
                </select>
            </div>
        </div>  
    )
}