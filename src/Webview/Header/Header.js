import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 md:p-7 gap-10 h-screen  bg-black text-white">
      <NavLink to="/" className=" hover:text-[#f7914d]">
        <AiFillHome size={25} />
      </NavLink>
      <a
        href="https://www.linkedin.com/in/singh-03-aparna/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-[#f7914d]"
      >
        <BsLinkedin size={25} />
      </a>

      <a
        href="https://leetcode.com/u/singh123aparna/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-[#f7914d]"
      >
        <SiLeetcode size={25} />
      </a>

      <a
        href="https://github.com/singh-aparna"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-[#f7914d]"
      >
        <IoLogoGithub size={25} />
      </a>
    </div>
  );
};

export default Header;
