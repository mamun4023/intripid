import React, {useRef, useState, useEffect}  from "react"

export default function Modal({open, setOpen, children}){
    const ref = useRef();

    const handleClickOutside = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            // setOpen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    },[])
  
    console.log(open)

    return(
        <div>
            {open && 
                <div 
                
                    style={{
                        // background : 'rgb(255,25,255, 0.3)',
                        
                    }} 
                    className="absolute z-50"
                    // onClick={()=>setOpen(false)}
                > 
                    <div 
                        ref = {ref}
                        onClick={e => {e.stopPropagation()}}
                    > 
                        {children}
                    </div>
                </div>
           }
        </div>
    )
}
