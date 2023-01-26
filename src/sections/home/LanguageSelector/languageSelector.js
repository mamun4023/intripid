import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Modal from '../../../components/Modal/modal';

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
        <div className="flex flex-row-reverse bg-bgLight">
            <div 
                className="flex items-center cursor-pointer p-4 lg:px-10 hover:opacity-20" 
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

            {/* list modal */}
            <Modal
                open = {open}
                setOpen = {setOpen}
            > 
                <div className=" z-50 absolute right-16 top-16"> 
                <div className="w-60 bg-white shadow-xl border-2 border-inputBg  rounded-xl">
                    {
                        languages.map(language => 
                            <div 
                                className="p-3 border-b  border-borderColor cursor-pointer hover:bg-inputBg"
                                onClick={()=> setSelectedLanguage(language)}
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
