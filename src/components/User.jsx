import { useState } from "react";

User = (props) => {

    const [count,setcount] = useState(0);
   
    return (
        <div className="user-card">
            <h3>user details</h3>
            <ul>
                <li>{props.Name}</li>
                <li>Location: calicut</li>
                <li>pinCode : 673638</li>
                <li>Age:22</li>
                <li>count : {count}</li>
                <button onClick={()=>{
                    setcount(count+1)
                }}>counter</button>
               
            </ul>
            
        </div>
    )
    
}
export default User;