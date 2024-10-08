import React from 'react'

const ExperienceCard = ({ company, profile, project, tech, responsibility1, responsibility2, responsibility3, responsibility4 }) => {
    return (
        <div className=' gap-y-2 flex flex-col'>
            <div className='font-semibold text-xl'>{company}</div>
            <div>{profile}</div>
            <div>{project}
            </div>
            <div>{tech}</div>
            <div>{responsibility1}</div>
            <div>{responsibility2}</div>
            <div>{responsibility3}</div>
            <div>{responsibility4}</div>
        </div>
    )
}
export default ExperienceCard