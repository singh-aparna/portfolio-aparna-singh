import React from "react";
import { TbLetterA, TbLetterS } from "react-icons/tb";
import Button from "../Component/Button/Button";
import PopUp from "../Component/PopUp/PopUp";
import { NavLink } from "react-router-dom";
//import BubbleEffect from '../BubbleEffect/BubbleEffect'

const Section1 = () => {
  const openPopUp =()=>{

  }
  return (
    <div>
      <div className="flex flex-col gap-5 px-32 pt-32 font-semibold ">
        <div className="text-3xl">Aparna Singh</div>

        <div className="text-6xl">Mern Stack Developer</div>
        <NavLink to="/popup"><Button title="About me" onClick={openPopUp}/></NavLink>
      </div>
      <NavLink to="/latest-work"><div className="flex justify-center"><Button title="Latest Work" /></div></NavLink>
     
    </div>
  );
};

export default Section1;
