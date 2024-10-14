import React from "react";
import "../document/Singh_Aparna_Resume.pdf"
// ../../../public/Image/design1.PNG
import Button from "../Component/Button/Button";
// import PopUp from "../Component/PopUp/PopUp";
import { NavLink } from "react-router-dom";
import ProfileCard from "../Component/ProfileCard/ProfileCard";

const Section1 = () => {
  const openPopUp = () => {
  }
  return (
    <div className="h-screen  flex flex-col gap-5 mx-0 px-2 md:px-20  pt-32 font-semibold text-white bg-[#3b383f] ">
      <div className="text-xl md:text-3xl">I'm a Mern Stack Developer</div>
      <div className="text-2xl md:text-6xl leading-snug tracking-tightest">Aparna Singh</div>
      <ProfileCard />
      <div> <a href="../document/Singh_Aparna_Resume.pdf"
        download="Singh_Aparna_Resume.pdf"><Button className="tracking-wider" title="DOWNLOAD CV ↓" /></a></div>
      <div className="flex gap-x-4 md:gap-x-6 mt-10">
        <NavLink to="/popup"><Button title="About me" onClick={openPopUp} /></NavLink>
        <NavLink to="/latest-work"><div className=""><Button title="Latest Work" /></div></NavLink>
        <NavLink to="/experience"><div className=""><Button title="Experience" /></div></NavLink>
      </div>
    </div>
  );
};

export default Section1;
