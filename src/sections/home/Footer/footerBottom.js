import React from "react"
import Logo from '../../../utils/logo/footer-logo.svg'
// social icon
import FacebookIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/Facebook.png';
import InstragramIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/Instagram.png';
import LinkedinIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/LinkedIn.png'
import TwitterIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/Twitter.png';


export default function FooterBottom(){   

    return(
        <div className="flex justify-center"> 
        <div className=" w-200 px-6  md:px-10 lg:p-3 py-14 bg-footerBg"> 
            <div className="grid grid-cols-1 xl:grid-cols-6">
                <div className="md:col-span-2"> 
                   
                    {/* logo and social logo */}
                    <div className= "text-center md:text-start lg:text-left lg:pl-20">
                        <div className= "flex justify-center md:justify-start lg:justify-start">  
                            <img 
                                src = {Logo} 
                                className = "w-40"
                            />
                        </div>
                        <div className="my-6 w-full pr-2 md:w-7/12 xl:w-10/12">
                            <p className="text-sm text-fontColor font-sans_regular leading-5">An online platform that encourages travel by removing stress from personal, leisure travel planning. </p>
                        </div>  
                        <div className="flex justify-center md:justify-start lg:justify-start lg:flex-none mt-2">
                            <img 
                                src= {FacebookIcon} 
                                className = "h-8 mt-2 pr-3"
                            />
                            <img 
                                src= {InstragramIcon} 
                                className = "h-8 m-2 pr-3"
                            />
                            <img 
                                src= {LinkedinIcon} 
                                className = "h-8 m-2 pr-3"
                            />
                            <img 
                                src= {TwitterIcon}  
                                className = "h-8 m-2"
                            />
                        </div>
                    </div>

                </div>
                <div className="md:col-span-4 mt-4">
                    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                    {/* col 1 */}
                    <div>
                        <h2 className="font-readex_bold text-fontColor text-xl"> About </h2>
                        <div>
                            <div className="mt-3 leading-4">  
                                <a className="text-sm text-fontColor hover:underline" href="#"> About Intripid </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Our Travelers</a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Contact Us</a>
                            </div>
                            <div className="mt-3 leading-4">     
                                <a className="text-sm text-fontColor hover:underline" href="#"> FAQs</a>
                            </div>
                        </div>
                    </div>
                    {/* col2 */}
                    <div className="w-38 md:w-full">
                        <h2 className="font-readex_bold text-fontColor text-xl"> Solutions </h2>
                        <div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor leading-none hover:underline" href="#"> Personalized Destinations </a>
                            </div>
                            <div className="mt-3 leading-4">
                                <a className="text-sm text-fontColor hover:underline" href="#"> Expert Travel Advisors </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Corporate Travel Planning </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Travel Sponsorship </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Travel Points & Rewards Integration </a>
                            </div>
                        </div>
                    </div>
                    {/* col 3 */}
                    <div className="mt-4 lg:mt-0">
                        <h2 className=" font-readex_bold text-fontColor text-xl"> Pricing </h2>
                        <div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Membership Plans </a>
                            </div>
                             <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Deals & Packages </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Vouchers </a>
                            </div>                
                        </div>
                    </div>
                    {/* col 4 */}
                    <div className="w-32 md:w-40 mt-4 2xl:mt-0 ">
                        <h2 className=" font-readex_bold text-fontColor text-xl"> Resources </h2>
                        <div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Intripid Brochure </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Executive Cutsheet </a>
                            </div>
                        </div>
                    </div>

                    {/* col 5 */}
                    <div className="mt-4 2xl:mt-0">
                        <h2 className=" font-readex_bold text-fontColor text-xl"> Support </h2>
                        <div className="mt-3 leading-4">
                            <a className="text-sm text-fontColor hover:underline" href="#"> Help Center </a>
                        </div>
                    </div>
                    {/* col 6 */}
                    <div className="w-32 md:w-full mt-4 2xl:mt-0 xl:w-full ">
                        <h2 className=" font-readex_bold text-fontColor text-xl">Privacy & Safety</h2>
                        <div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Terms & Conditions </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Privacy & Cookies Statement </a>
                            </div>
                            <div className="mt-3 leading-4"> 
                                <a className="text-sm text-fontColor hover:underline" href="#"> Security </a>
                            </div>
                        </div>
                    </div>

                </div>
                </div> 
            </div>
            
            <div className="mt-10 xl:px-20 md:flex justify-between"> 
                <div className="flex justify-center" >
                    <p className="text-xs text-fontColor font-sans_regular"> All rights reserved © 2023 Intripid</p>
                </div>
                <div className="flex justify-center mt-4 md:mt-0">
                    <p className=" text-xs text-fontColor font-sans_regular"> Privacy/Terms & Conditions</p>
                </div>
            </div>           
        </div>
        </div>
    )
}