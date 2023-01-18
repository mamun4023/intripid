import React from "react";
import TopBanner from "../../sections/home/Banner/TopBanner";
import LanguageSelector from "../../sections/home/LanguageSelector/languageSelector";
import TopNavBar from "../../sections/home/TopNavBar/TopNavBar";
import TopSection from '../../sections/home/Body/TopSection';
import MiddleSection from "../../sections/home/Body/MiddleSection";
import BottomSection from "../../sections/home/Body/BottomSection";
import FooterTop from "../../sections/home/Footer/footerTop";
import FooterBottom from '../../sections/home/Footer/footerBottom'

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
            {/* <BottomSection /> */}

            {/* <FooterTop /> */}
            {/* <FooterBottom/> */}
        </div>
    )
}