import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../components/Modal/LanguageSelectionModal";

export default function LanguageSelector(){
    const [open, setOpen] = useState(false);
    const [languages, setLanguages] = useState([
        'English', 
        'Español', 
        'Français', 
        'Liechtenstein', 
        'Svenska',
        '中文 Chinese',
        '日本語 Nihongo'
    ])
    const [selectedLangauge, setSelectedLanguage] = useState('English');

    return(
        <div className="flex justify-center">
            <div className="w-200 relative">
                <div className="flex justify-end bg-bgLight"> 
                    <div 
                        className=" flex relative hover:opacity-20 items-center cursor-pointer p-4" 
                        onClick={()=> setOpen(true)} 
                    > 
                        <FontAwesomeIcon 
                            icon={faGlobe}
                            className = "text-sm text-fontColor"
                        />
                        <p className="font-sans_medium text-sm text-fontColor px-2">
                            {selectedLangauge}
                        </p>
                        <FontAwesomeIcon 
                            icon={faChevronDown}
                            className = "text-sm text-fontColor p-1"
                        />
                    </div>
                </div>
            

            {/* list modal */}
            
        </div>
        <Modal
                open = {open}
                setOpen = {setOpen}
            > 
                <div className=" absolute right-20 top-14 "> 
                    <div className="w-60 bg-white shadow-xl border-2 overflow-clip border-bgLight rounded-xl">
                        {
                            languages.map(language => 
                                <div
                                    key={language} 
                                    className="p-3 border-b border-borderColor cursor-pointer hover:bg-bgLight"
                                    onClick={()=> {
                                        setSelectedLanguage(language)
                                        setOpen(false)
                                    }}
                                > 
                                    <p className="font-sans_regular text-sm"> 
                                        {language} 
                                    </p>
                                </div>
                            )
                        }       
                    </div>
                </div>
            </Modal>
        </div> 
    )
}
