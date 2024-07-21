import React from 'react'
import NavbarComp from './NavbarComp'
import { Progress } from "@nextui-org/react";

const Skills = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <NavbarComp page="skills" />
            <div className='skills-container flex'>
                <div className='skills-head-cont fixed left-0 top-0 h-full flex items-center justify-center'>
                    <h1 className='skills-head text-shadow transform -rotate-90 whitespace-nowrap origin-center md:text-black'>
                        Skills
                    </h1>
                </div>
                <div className="flex-grow p-4 ml-[20%] skills-section">
                    <div className=' p-5 work-skill'>
                    <h1 className='relative text-3xl text-white'>HTML, CSS & JS</h1>
                    <Progress
                        aria-label=""
                        size="md"
                        value={90}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md relative mb-5 text-white"
                    />

                    <h1 className='relative text-3xl text-white'>React JS</h1>
                    <Progress
                        aria-label=""
                        size="md"
                        value={65}
                        color="warning"
                        showValueLabel={true}
                        className="max-w-md relative mb-5 text-white"
                    />

                    <h1 className='relative text-3xl text-white'>Node JS/ Express JS</h1>
                    <Progress
                        aria-label=""
                        size="md"
                        value={60}
                        color="success"
                        showValueLabel={true}
                        className="max-w-md relative mb-5 text-white"
                    />

                    <h1 className='relative text-3xl text-white'>Mongo DB</h1>
                    <Progress
                        aria-label=""
                        size="md"
                        value={50}
                        color="danger"
                        showValueLabel={true}
                        className="max-w-md relative text-white"
                    />
                    </div>
                    <div className=' p-5 extra-skill'>
                        <h1 className='relative text-3xl text-white'>Python</h1>
                        <Progress
                        aria-label=""
                        size="md"
                        value={70}
                        color="danger"
                        showValueLabel={true}
                        className="max-w-md relative mb-5 text-white"
                    />
                    <h1 className='relative text-3xl text-white'>C/C++</h1>
                        <Progress
                        aria-label=""
                        size="md"
                        value={60}
                        color="success"
                        showValueLabel={true}
                        className="max-w-md relative mb-5 text-white"
                    />
                    <h1 className='relative text-3xl text-white'>Leadership</h1>
                        <Progress
                        aria-label=""
                        size="md"
                        value={80}
                        color="warning"
                        showValueLabel={true}
                        className="max-w-md relative text-white"
                    />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills