import React from 'react'
import NavbarComp from './NavbarComp'
import ProjectCardComp from './ProjectCardComp'
import './styles/ProjectCard.css'

const Projects = () => {
  return (
    <div className="projects-page">
      <NavbarComp page='projects' />
      <div className="projects-content">
        <div className='skills-head-cont'>
          <h1 className='skills-head'>
            Projects
          </h1>
        </div>
        <div className='card-container'>
          <ProjectCardComp
            name="BlabSpace (MERN)"
            desc="Blab Space is a dynamic text-based social platform where you can join or create Spaces/Groups centered around your interests"
            skills="React | Express | MongoDB"
            img="Blabspace.png"
            link="https://github.com/AdityaGodara/BlabSpace---Mern-App"
          />

          <ProjectCardComp
            name="Aavansh Website"
            desc="Aavansh is the drama club of my college. I have built a visually impactfull and working website for it. Contents page is under work!"
            skills="React | HTML | JavaScript"
            img="Aavansh.png"
            link="https://github.com/AdityaGodara/Aavansh-Webiste"
          />
          
          <ProjectCardComp
            name="Mars Cravings"
            desc="Mars Cravings is a pioneering outer space food delivery app designed to cater to the unique dietary needs and cravings of astronauts and space travelers."
            skills="HTML | CSS | JavaScript"
            img="MarsCravings.png"
            link="https://github.com/AdityaGodara/Mars-Cravings-Outer-Space-Food-Delivery"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects