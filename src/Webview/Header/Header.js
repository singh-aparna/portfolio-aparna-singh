import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col justify-center  p-10 bg-blue-400 gap-10'>
      <NavLink to="/github">
        <div><BsGithub /></div>
      </NavLink>
      <NavLink to="linkedin">
        <div><BsLinkedin /></div>
      </NavLink>
      <NavLink to="linkedin">
        <div><BsLinkedin /></div>
      </NavLink>
      <NavLink to="linkedin">
        <div><BsLinkedin /></div>
      </NavLink>
      <NavLink to="linkedin">
        <div><BsLinkedin /></div>
      </NavLink>
      <NavLink to="/">
        <div><BsLinkedin /></div>
      </NavLink>
      
    </div>
  )
}

export default Header