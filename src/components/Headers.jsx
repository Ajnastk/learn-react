
import { useState } from "react";
import { LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link, useLinkClickHandler} from "react-router-dom"
import useOnlineStatus from "../utils/useStatus";

Headers = () => {

  const [buttonName,setbuttonName] = useState("login")
  const LineStatus = useOnlineStatus();
  
  
    return (
      <div className="flex justify-between  bg-green-50 h-28 items-center">
        <div className="w-40">
          <img
            className="pl-4"
            src={LOGO_URL}
          />
        </div>
        <ul className="flex text-xl  text-slate-700 ">
          <li className="mx-6">online status:{LineStatus ? "✅" : "🔴"}</li>
          <li className="mx-6">
            <Link to="/" className="h">
              home
            </Link>
          </li>
          
          <li className="mx-6">
            <Link to="/about">about</Link>
          </li>
          <li className="mx-6">
            <Link to="/contact">contact</Link>
          </li>
          <li className="mx-6">
            <Link to="/help">help</Link>
          </li>
          <li className="mx-6"><Link to="/grocery">grocery</Link></li>
          <li className="mx-6 px-3 border border-none bg-red-700 text-white"><button className="login-button" onClick={()=>{  

            buttonName ==="login" 
            ? setbuttonName("logout")
            :setbuttonName("login")
          
           // setbuttonName("logout")
          }
          
          }>{buttonName}</button></li>
        </ul>
        
      </div>
    );
  };

  export default Headers;
