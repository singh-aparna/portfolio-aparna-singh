import React from 'react'
import LatestworkDesigns from '../Component/LatestworkDesigns/LatestworkDesigns'

// ../../../public/Image/design1.PNG

const LatestWork = () => {
    const designs = [
        { image:"../Image/design1.PNG", link: 'https://web-assignment-fitpeo-tech.vercel.app/' },
        { image:"../Image/design1.PNG", link: 'https://wodmart-nextjs-project.vercel.app/' },
        { image:"../Image/design1.PNG", link: 'https://test-project-wheat-omega.vercel.app/' },
       
        
      ];
  return (
    <div className=' grid grid-cols-4'>
      
     
        {
            designs.map((design,index)=> (
            <LatestworkDesigns key={index} designImage={design.image} vercelLink={design.link} />
        ))
        }
    </div>
  )
}

export default LatestWork