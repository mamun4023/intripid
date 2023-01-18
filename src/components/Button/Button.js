import React from "react"

export default function Button({title}){
    return(
        <div className="flex justify-center">
          <button 
            type="button" 
            className='bg-violet-500 p-2 text-white text-xs  px-8 rounded-full hover:bg-violet-900'
            >{title}</button>
      </div>
    )
}