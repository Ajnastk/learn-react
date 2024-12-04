import MenuItem from "./MenuItem";
import { useState } from "react";
const ResCategory = ({data})=>{

    const [showItem,setShowItem] = useState(false)
const handleClick = ()=>{

    setShowItem(!showItem)
}
    return (
<div>
     {/* header */}
     <div className="w-6/12 mx-auto my-5 p-4 shadow-lg bg-slate-100 ">
       <div className="flex justify-between">
         <span className="text-xl font-semibold cursor-pointer"
         onClick={handleClick}
         >{data.title} {"\u00A0"} ({data.itemCards.length})</span> 
         <span>⬇️</span>
         </div>
       {showItem && <MenuItem items={data.itemCards}/>} 
     </div>

     {/* Accordion Body */}

    
</div>
    )
}
 export default ResCategory;