import React from "react";
import {AnimatePresence, motion} from 'framer-motion';

export default function Button({title}){
    return(
        <div className="flex justify-center">
          <AnimatePresence> 
            <motion.button 
              type="button" 
              className='bg-primary p-3 font-sans_medium text-white text-sm  px-8 rounded-full hover:bg-primaryDark'
              whileHover={{scale : 1.2}}
              transition = {{duration : 0.4}}

            >{title}
            </motion.button>
          </AnimatePresence>
      </div>
    )
}