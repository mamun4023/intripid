import React from "react";
import TopBanner from "../../components/Banner/TopBanner";
import LanguageSelector from "../../components/LanguageSelector/languageSelector";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import TopSection from '../../components/Body/TopSection';
import MiddleSection from "../../components/Body/MiddleSection";
import BottomSection from "../../components/Body/BottomSection";


export default function Home(){
    return(
        <div>
            {/* header section */}
            <div className="md:ml-20 md:mr-20 "> 
                <LanguageSelector />
                <div className="px-2"> 
                    <TopNavBar />
                </div>
                <TopBanner />
                {/* body component */}
            </div> 
            <TopSection />
            <MiddleSection />
            <BottomSection />
        </div>
    )
}