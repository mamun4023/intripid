import React from "react"
import {motion} from 'framer-motion';

import BgImage from '../../../utils/CampaignImages/Pattern.png';
import CampaignImage from '../../../utils/CampaignImages/BannerCampaign.png';
import DotWash from '../../../utils/CampaignImages/Dotswashi.png'

const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
    //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };



export default function FooterTop(){
    
   

    return(
        <motion.div className="flex justify-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        > 
        <div 
            style={{ backgroundImage: `url(${BgImage})`}}
            className="object-scale-down  relative overflow-hidden bg-no-repeat w-200 xl:h-140  xl:px-16"
        >
            <div

            >
                <img 
                    src= {DotWash} 
                    className = "absolute z-0 right-0 invisible lg:visible"
                />
            </div>
            <div className="flex justify-center flex-wrap lg:flex-nowrap">
                <motion.div
                   variants={cardVariants}
                >
                    <img 
                        src= {CampaignImage}
                        className = "relative w-140 hidden xl:block"
                    />
                </motion.div>
                <motion.div 
                    className="mt-16 m-4 md:m-10 xl:m-0 xl:mt-40 xl:pl-10  lg:w-6/12 z-10"
                    variants={cardVariants}
                >
                    <div className="flex justify-center">
                        <div className="block p-8 rounded-3xl shadow-lg bg-white  bg-blend-normal">
                            <h5 className="text-2xl md:text-4xl xl:text-4xl font-readex_bold text-fontColor mb-2">
                                A more compassionate wolrd through increased travel.
                            </h5>
                            <p className="text-xl text-fontColor py-6 leading-5">
                                Travel exposes us to the lives of others. Our mission is to encourage people  to travel by making it easier to plan, book, and execute amazing trips.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10  md:justify-start ">
                        <button
                            className="bg-white text-md text-fontColor font-sans_medium rounded-full px-12 p-4 w-full md:w-5/12 lg:w-6/12 "
                        > Join the Mission </button>
                    </div>    
                </motion.div>
            </div>
        </div>
        </motion.div>
    )
}