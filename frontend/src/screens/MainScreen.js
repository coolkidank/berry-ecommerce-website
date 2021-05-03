import React from "react";
import "./mainstyle.css";
import g1 from "./ww.jpeg";

function Main () {
    return(
        <div className = "containe">
            <div className="banner">
            <img src = {g1} width="100%"></img>
            <a href="./HomeScreen">

           
           <button className= "buttn" >SHOP NOW</button>
           </a>
            </div>
            
           
        </div>
    )
}

export default Main

