import React from "react"

export default function Button({title}){
    return(
        <div class="flex justify-center">
          <button 
            type="button" 
            className='bg-violet-500 p-3 text-white text-xs  px-10 rounded-full hover:bg-violet-900'
            >{title}</button>
      </div>
    )
}