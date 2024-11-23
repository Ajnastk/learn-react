
import { useState } from "react";
import { LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom"

Headers = () => {

  const [buttonName,setbuttonName] = useState("login")
  
    return (
      <div className="header">
        <div className="img">
          <img
            className="swiggy-logo"
            src={LOGO_URL}
          />
        </div>
        <ul className="h-list">
          <li>
            <Link to="/" className="h">
              home
            </Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/help">help</Link>
          </li>
          <li><button className="login-button" onClick={()=>{  

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
