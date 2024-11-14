import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

import Headers from "./components/Headers.jsx"
import  Body from "./components/Body.jsx";
import Shimmer from "./components/Shimmer.jsx"




const Applayout = () => {
  return (
    <div className="application">
      <Headers />
      <Body />
     
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
