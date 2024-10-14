import React from 'react'
import ExperienceCard from '../Component/ExperienceCard/ExperienceCard'

const Experience = () => {
  return (
    <div className='pl-20 pt-14 flex flex-col gap-y-4' >
      <div className='text-xl md:text-3xl font-semibold'>Experience</div>
      <ExperienceCard company="Equipped Analytical Intelligence - Noida" profile="Software Engineer I"
        project="Project - Minerva (Minerva, enables clients to collect, compile, analyse and better understand data in order to help
them make important decisions and ultimately produce superior returns for their investors.)"
        tech="Technologies - React JS"
        responsibility1="• Designed and executed comprehensive test plans to identify software vulnerabilities and bugs."
        responsibility2="• Utilized Agile methodologies to manage project timelines and deliverables efficiently."
        responsibility3="• Collaborated with other developers in designing solutions for customer requirements."
        responsibility4="• Led small development teams, overseeing project progress and mentoring junior engineers."
      />

      <ExperienceCard company="ClickValley Technologies OPC Private Limited - Delhi" profile="Software Engineer"

        tech="Technologies - ReactJS | JavaScript | Node.js | Express.js | MongoDB | Mongoose"
        responsibility1="• Worked as a Full Stack Developer, on website and gave it a new ’look and feel’ with fully responsive and customdesigned pages. Being a Node.js project, used Express.js to create the server and routes for pages. Used MongoDB
and Mongoose for the databases. Wrote Vanilla CSS to give it a custom feel and used CSS Flexbox and Media
Queries to make it highly responsive. Added the functionality using Vanilla JavaScript and Axios to send from data
asynchronously."
      />


      <ExperienceCard company="DataTrained Education - Noida" profile="Software Development Intern"

        tech="Technologies Used: React | JavaScript | HTML | CSS"
        responsibility1="• Worked as a Frontend Developer. Created reusable React components from HTML themes. Made navigation using
React Router. Used Redux to manage complex states. Worked with Figma designs to create custom sites using Vanilla
CSS and JavaScript.
"
      />

    </div>
  )
}
export default Experience