import React from "react";
import "../document/APARNA_RESUME_DEC.pdf"
// ../../../public/Image/design1.PNG
import Button from "../Component/Button/Button";
// import PopUp from "../Component/PopUp/PopUp";
import { NavLink } from "react-router-dom";
import ProfileCard from "../Component/ProfileCard/ProfileCard";
import { HiDownload } from "react-icons/hi";

const Section1 = () => {
  const openPopUp = () => {
  }
  return (
    <div className="h-screen flex flex-col gap-5 mx-0 px-16 md:px-32  pt-32 font-semibold text-white bg-[#3b383f] ">
      <div className="text-xl md:text-3xl">I'm a Mern Stack Developer</div>
      <div className="text-4xl md:text-6xl leading-snug tracking-tightest">Aparna Singh</div>
      <ProfileCard />
      <div> <a href="../document/Singh_Aparna_Resume_Jan25.pdf"
        download="Singh_Aparna_Resume_Jan25.pdf"><Button className="tracking-wider" title={<span className="flex justify-center items-center  gap-x-2">DOWNLOAD CV <HiDownload /></span>} /></a></div>
      <div className="flex gap-x-3 md:gap-x-6 mt-10">
        <NavLink to="/popup"><Button title="About me" onClick={openPopUp} /></NavLink>
        <NavLink to="/latest-work"><div className=""><Button title="Latest Projects" /></div></NavLink>
        <NavLink to="/experience"><div className=""><Button title="Experience" /></div></NavLink>
      </div>
    </div>
  );
};

export default Section1;
