import React from "react";
import TopBanner from "../../sections/home/Banner/TopBanner";
import LanguageSelector from "../../sections/home/LanguageSelector/languageSelector";
import TopNavBar from "../../sections/home/TopNavBar/TopNavBar";
import TopSection from '../../sections/home/Body/TopSection';
import MiddleSection from "../../sections/home/Body/MiddleSection";
import BottomSection from "../../sections/home/Body/BottomSection";
import FooterTop from "../../sections/home/Footer/footerTop";
import FooterBottom from '../../sections/home/Footer/footerBottom';

export default function Home(){
    return(
        <div>
            <div> 
                <LanguageSelector />
            </div>
            <div className="sticky top-0 w-full z-20"> 
                <TopNavBar />
            </div>
            <div>  
                <TopBanner />
            </div>
            <div> 
                <TopSection />
            </div>
                <MiddleSection />
                <BottomSection />
                <FooterTop />
                <FooterBottom/>
            
        </div>
    )
}