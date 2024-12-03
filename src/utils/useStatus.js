
import { useState, useEffect } from 'react';

const useOnlineStatus = ()=>{

    const [LineStatus,setLineStatus ]= useState(true);

useEffect(()=>{
window.addEventListener("offline", ()=> { 
    setLineStatus(false);
})
window.addEventListener("online", ()=> {
    setLineStatus(true);
})
},[])



     return LineStatus;
}

export default useOnlineStatus;