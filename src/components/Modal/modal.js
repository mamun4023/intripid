import React, {useState}  from "react"


export default function Modal({open, setOpen, children, left, right, top, bottom}){
  
    return(
        <>
            {open && 
                <div 
                    style={{
                        // background : 'rgb(255,25,255, 0.3)',
                        width : '100%',
                        height : '100%'
                    }} 
                    className="absolute z-40"
                    onClick={()=>setOpen(false)}
                > 
                   
                        {children}
                   
                </div>
           }
        </>
    )
}