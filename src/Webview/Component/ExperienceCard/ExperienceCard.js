import React from 'react'

const ExperienceCard = ({period, company, profile, project, tech, responsibility1, responsibility2, responsibility3, responsibility4 }) => {
    return (
        <div className='border-t gap-y-2 flex flex-col  '>
            {/* <div className='font-semibold text-xl'>{company}</div>
            <div className='text-[#eb8b4d]'>{profile}</div>
            <div>{project}
            </div>
            <div>{tech}</div>
            <div>{responsibility1}</div>
            <div>{responsibility2}</div>
            <div>{responsibility3}</div>
            <div>{responsibility4}</div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0'>
                <div className='grid-cols-1'>{period}</div>
                <div className='grid-cols-1 '>
                    <div className='flex flex-col'>
                        <div className='text-xl'>{company}</div>
                    <div className='text-[#eb8b4d]'>{profile}</div>
                    <div>{responsibility1}</div>
                    <div>{responsibility2}</div>
                    <div>{responsibility3}</div>
                    <div>{responsibility4}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExperienceCard