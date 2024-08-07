import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-full fixed flex flex-col justify-center items-center p-5 md:p-10 gap-5 md:gap-10  bg-black text-white">
      <NavLink to="/" className=" hover:text-blue-700">
        <AiFillHome size={25} />
      </NavLink>
      <a
        href="https://www.linkedin.com/in/singh-03-aparna/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-blue-700"
      >
        <BsLinkedin size={25} />
      </a>

      <a
        href="https://leetcode.com/u/singh123aparna/"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-blue-700"
      >
        <SiLeetcode size={25} />
      </a>

      <a
        href="https://github.com/singh-aparna"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-blue-700"
      >
        <IoLogoGithub size={25} />
      </a>
    </div>
  );
};

export default Header;
