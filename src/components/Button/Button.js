import React from "react"

export default function Button({title}){
    return(
        <div className="flex justify-center">
          <button 
            type="button" 
            className='bg-primary p-3 font-sans_medium text-white text-sm  px-8 rounded-full hover:bg-primaryDark'
            >{title}</button>
      </div>
    )
}