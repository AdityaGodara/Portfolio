import React from 'react'
import NavbarComp from './NavbarComp'
import SocialBar from './SocialBar'

const About = () => {
    const theme = window.localStorage.getItem('color-theme')

    return (
        <>
        <NavbarComp page="about" />
        <div className="relative h-screen overflow-hidden">
            <div className="about-body absolute inset-y-0 right-0 z-0 flex items-center justify-end md:justify-center">
            
                <img 
                    src={theme === 'dark' ? 'Images/HomeImage.png' : 'Images/Image2light.png'} 
                    className={`
                        ${theme === 'dark' 
                            ? 'w-full md:w-[60vw] lg:w-[40vw]' 
                            : 'w-full md:w-[45vw] lg:w-[40vw] relative bottom-20'
                        } 
                        max-w-full h-auto object-contain
                        md:translate-x-[-20%]
                        about-img
                    `}
                    alt="Home"
                />
                <div className='about-para-container '>
                
                    <p className='about-para text-shadow mb-10 mt-10'>
                        Hey there! I'm Aditya, a code-slinging, drama-loving <b>Computer Science student at GGSIPU. </b>
                        When I'm not busy crafting full-stack wonders or diving into the latest tech trends, 
                        you'll find me orchestrating social media magic for my university's drama society, Aavansh.
                        I've got a knack for turning coffee into code and transforming complex problems into elegant solutions. 
                        My superpower? Juggling technical competitions, creative projects, and the occasional dramatic monologue.
                    </p>
                    <SocialBar className="social-bar" />
                </div>
                
            </div>
            <div className='about-text text-right'>
                <h1 className='about-head text-shadow '>About</h1>
            </div>
        </div>
        </>
    )
}

export default About