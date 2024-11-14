
import { useState } from "react";
import { LOGO_URL} from "../utils/constants";
import {useState} from "react";

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
            {" "}
            <a href="/" className="h">
              home
            </a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">help</a>
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
