import React from 'react'

const ExperienceCard = ({period, company, profile, project, tech, responsibility1, responsibility2, responsibility3, responsibility4 }) => {
    return (
        
            <div className='border-t grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-0 p-4 md:px-36 md:py-6'>
                <div className='grid-cols-1 text-lg md:text-base'>{period}</div>
                <div className='grid-cols-1 '>
                    <div className='flex flex-col gap-y-3 text-lg md:text-base'>
                        <div className=''>{company}</div>
                    <div className='text-[#eb8b4d] text-2xl'>{profile}</div>
                    <div>{project}</div>
                    <div>{tech}</div>
                    <div>{responsibility1}</div>
                    <div>{responsibility2}</div>
                    <div>{responsibility3}</div>
                    <div>{responsibility4}</div>
                    </div>
                </div>
            </div>
       
    )
}
export default ExperienceCard

