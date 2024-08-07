import React from "react";

import Button from "../Component/Button/Button";
// import PopUp from "../Component/PopUp/PopUp";
import { NavLink } from "react-router-dom";


const Section1 = () => {
  const openPopUp =()=>{

  }
  return (
   
      <div className="h-full  flex flex-col gap-5 px-5 md:px-10 pt-32 font-semibold bg-[#f4f2ee] ">
        <div className="text-xl md:text-3xl">Aparna Singh</div>

        <div className="text-2xl md:text-6xl">Mern Stack Developer</div>
        <NavLink to="/popup"><Button title="About me" onClick={openPopUp}/></NavLink>
        <NavLink to="/latest-work"><div className=""><Button title="Latest Work" /></div></NavLink>
      </div>
      
     
   
  );
};

export default Section1;
