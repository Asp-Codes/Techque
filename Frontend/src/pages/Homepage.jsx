import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const  Homepage=()=>{
    return(
        <div className="w-full flex flex-col justify-center">
         <Navbar/>
         <Hero />
         
        </div>
         

    );
}

export default Homepage;