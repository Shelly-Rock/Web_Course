import { useState,useCallback } from "react";
export default function useToogle(state=false){
    const [open,setOpen] = useState(state);
    const handleOpen  =useCallback(()=>{
        setOpen(true)
    },[])
    const handleClose = useCallback(()=>{
        setOpen(false)
    },[])
    const toogle = useCallback(()=>{
        setOpen(prev => !prev)
    },[])
    return{open,handleOpen,handleClose,toogle};
}