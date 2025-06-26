import React from 'react'
import NavbarComp from './NavbarComp'
import ExpCardComp from './ExpCardComp'
import './styles/exp.css'

const Experience = () => {
    return (
        <div className="experience-page">
            <NavbarComp page="experience" />
            <div className='experience-content'>
                <div className='skills-head-cont'>
                    <h1 className='exp-head'>
                        Experience
                    </h1>
                </div>
                <div className='exp-card-container'>

                    <ExpCardComp
                        title="Data Analyst / BI Intern"
                        img="cliqvenus.png"
                        date="November 2024 - October 2025"
                        desc="Lead the dramatics club of Delhi Technical Campus as President."
                        link="https://www.linkedin.com/in/aditya-godara-b858751ab/details/experience/"
                    />

                    <ExpCardComp
                        title="President"
                        img="Aavansh_exp.png"
                        date="November 2024 - October 2025"
                        desc="Lead the dramatics club of Delhi Technical Campus as President."
                        link="https://www.linkedin.com/in/aditya-godara-b858751ab/details/experience/"
                    />

                    <ExpCardComp
                        title="3D Designer"
                        img="Heimatverse.jpg"
                        date="Aug 2023 - Dec 2023"
                        desc="Worked as a 3D designer at Heimatverse, an IT solutions company."
                        link="https://www.linkedin.com/in/aditya-godara-b858751ab/details/experience/"
                    />

                    <ExpCardComp
                        title="Social Media Manager"
                        img="Aavansh_exp.png"
                        date="Oct 2023 - November 2024"
                        desc="Managing social media for the organization."
                        link="https://www.linkedin.com/in/aditya-godara-b858751ab/details/experience/"
                    />

                    <ExpCardComp
                        title="Content Writer"
                        img="sarvam.png"
                        date="Aug 2023 - Oct 2023"
                        desc="Worked as a content development intern at Sarvam Foundation."
                        link="https://www.linkedin.com/in/aditya-godara-b858751ab/details/experience/"
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience