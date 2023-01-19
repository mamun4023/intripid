import React from "react"
import Logo from '../../../utils/logo/footer-logo.svg'
// social icon
import FacebookIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/Facebook.png';
import InstragramIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/Instagram.png';
import LinkedinIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/LinkedIn.png'
import TwitterIcon from '../../../utils/BrandIcons/Pngs/SocialIcons/Twitter.png';


export default function FooterBottom(){   

    return(
        <div className="m-10"> 
            <div className="flex justify-center  md:ml-28 md:mr-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12  ">
                    <div className=" col-span-3">
                        <img 
                            src = {Logo} 
                            className = "w-40"
                        />
                        <div className="mt-2">
                            <p className="text-ms text-slate-600">An online platform that encourages travel by removing stress from personal, leisure travel planning. </p>
                        </div>
                        {/* social Icon */}
                        <div className=" flex justify-start mt-2">
                            <img 
                                src= {FacebookIcon} 
                                className = "h-8 mt-2"
                            />
                            <img 
                                src= {InstragramIcon} 
                                className = "h-8 m-2"
                            />
                            <img 
                                src= {LinkedinIcon} 
                                className = "h-8 m-2"
                            />
                            <img 
                                src= {TwitterIcon}  
                                className = "h-8 m-2"
                            />
                        </div>
                    </div>
                    <div className="col-span-9"> 
                        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
                            <div className="mt-4 mb-4 pr-4">
                                <h2 className="font-readex_bold" > About </h2>
                                <div>
                                    <div className="mt-2">  
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> About Intripid </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Our Travelers</a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Contact Us</a>
                                    </div>
                                    <div className="mt-2">     
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> FAQs</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 mb-4 w-60">
                                <h2 className="font-readex_bold"> Solutions </h2>
                                <div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Personalized Destinations </a>
                                    </div>
                                    <div className="mt-2">
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Expert Travel Advisors </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Corporate Travel Planning </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Travel Sponsorship </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> TravelPoints & Rewards <br/> Integration </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 mb-4 w-60">
                                <h2 className=" font-readex_bold"> Pricing </h2>
                                <div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Membership Plans </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Deals & Packages </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Vouchers </a>
                                    </div>                
                                </div>
                            </div>
                            <div className="mt-4 mb-4  pr-10 w-60">
                                <h2 className=" font-readex_bold"> Resources </h2>
                                <div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Intripid Brochure </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Executive Cutsheet </a>
                                    </div>
                                </div>
                            </div> 
                            <div className="mt-4 mb-4  pr-10 w-60">
                                <h2 className=" font-readex_bold"> Support </h2>
                                <div className="mt-2">
                                    <a className="text-sm text-slate-600 hover:underline" href="#"> Help Center </a>
                                </div>
                            </div>
                            <div className="mt-4 mb-4  w-60">
                                <h2 className=" font-readex_bold">Privacy & Safety</h2>
                                <div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Terms & Conditions </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Privacy & Cookies Statement </a>
                                    </div>
                                    <div className="mt-2"> 
                                        <a className="text-sm text-slate-600 hover:underline" href="#"> Security </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="flex justify-center m-5"> 
                <p className="text-slate-400 text-xs">All rights reserved © 2023 Intripid</p>
            </div>
        </div>
    )
}