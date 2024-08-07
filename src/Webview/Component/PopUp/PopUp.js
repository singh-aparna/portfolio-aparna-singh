import React from 'react'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'

const PopUp = () => {
    const closePopUp =()=>{

    }
  return (
    <div className='h-full  grid grid-cols-1 lg:grid-cols-2 p-16 md:px-24 md:py-5 items-center justify-between'>
        <div className='flex flex-col gap-5 md:gap-3 text-lg md:text-xl'>
            <div className='flex justify-between'>
            <div className='font-semibold'>ABOUT ME</div>
            <NavLink to="/"><IoCloseSharp /></NavLink>
            </div>
            <div className='text-sm md:text-lg'>I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</div>
            <div className='flex flex-wrap gap-3 text-sm md:text-base'>
                <Button className="" title="#reactjs"/>
                <Button title="#nextjs"/>
                <Button title="#javascript"/>
                <Button title="#nodejs"/>
                <Button title="#expressjs"/>
                <Button title="#mongodb"/>
                <Button title="#tailwind"/>
                <Button title="#git"/>
                <Button title="#github"/>
            </div>
            <div className='font-semibold'>MERN STACK</div>
            <div className='flex gap-3 md:gap-5'>
                <div className='flex flex-col items-center gap-2 '><img className='h-10 w-10' src='https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg'/>M</div>
                <div className='flex flex-col items-center gap-2'><img className='h-10 w-10' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'/>E</div>
                <div className='flex flex-col items-center gap-2'><img className='h-10 w-10' src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'/>R</div>
                <div className='flex flex-col items-center gap-2'><img className='h-10 w-10' src='https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png'/>N</div>
            </div>
            <NavLink to="/"><Button  title="Ok" onClick={closePopUp}/> </NavLink>  
        </div>
       
        <div className='flex  justify-center '><img className='md:h-[400px] md:w-[400px] hidden lg:block '  src='https://www.kindpng.com/picc/m/145-1451249_logo-web-development-icon-hd-png-download.png'/></div>
    </div>
  )
}

export default PopUp