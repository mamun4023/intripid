import React,{useEffect, useRef} from "react"

export default function Modal({open, setOpen, children}){
    const ref = useRef();
    const handleClickOutside = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    },[])

    // console.log(open)

    return open? (
            <div>
                <div 
                    className="absolute z-40"
                    onClick={e => {e.stopPropagation()}}
                    ref = {ref}
                > 
                    {children}
                </div>
            </div>
    ):null
}
