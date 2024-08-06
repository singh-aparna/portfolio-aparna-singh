import React from 'react'
import Section1 from '../Section1/Section1'
import PopUp from '../Component/PopUp/PopUp'
import LatestWork from '../LatestWork/LatestWork'

const MainSection = () => {
  return (
    <div>
        <div><Section1/></div>
       

        <div className='hidden'><PopUp/></div>
    </div>
  )
}

export default MainSection