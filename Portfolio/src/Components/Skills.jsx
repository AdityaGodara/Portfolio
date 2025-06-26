import NavbarComp from './NavbarComp'
import { Progress } from "@nextui-org/react";

const Skills = () => {
    return (
        <div className="relative h-screen">
            <NavbarComp page="skills" />
            <div className='skills-container flex'>
                <div className='skills-head-cont fixed left-0 top-0 h-full flex items-center justify-center'>
                    <h1 className='skills-head text-shadow transform -rotate-90 whitespace-nowrap origin-center md:text-black'>
                        Skills
                    </h1>
                </div>
                <div className="flex-grow p-4 ml-[20%] skills-section">
                    <div className=' p-5 work-skill'>
                        <div>
                            <h1 className='relative text-3xl text-white'>HTML, CSS & JavaScript</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={90}
                                color="secondary"
                                showValueLabel={true}
                                className="max-w-md relative mb-5 text-white"
                            />
                        </div>

                        <div>
                            <h1 className='relative text-3xl text-white'>React.js</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={65}
                                color="warning"
                                showValueLabel={true}
                                className="max-w-md relative mb-5 text-white"
                            />
                        </div>

                        <div>
                            <h1 className='relative text-3xl text-white'>Node JS/ Express JS</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={60}
                                color="success"
                                showValueLabel={true}
                                className="max-w-md relative mb-5 text-white"
                            />
                        </div>

                        <div>
                            <h1 className='relative text-3xl text-white'>Mongo DB</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={50}
                                color="danger"
                                showValueLabel={true}
                                className="max-w-md relative mb-5 text-white"
                            />
                        </div>

                        <div>
                            <h1 className='relative text-3xl text-white'>SQL</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={80}
                                color="secondary"
                                showValueLabel={true}
                                className="max-w-md mb-5 relative text-white"
                            />
                        </div>

                        <div>
                            <h1 className='relative text-3xl text-white'>Firestore</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={60}
                                color="secondary"
                                showValueLabel={true}
                                className="max-w-md relative mb-5 text-white"
                            />
                        </div>

                        <div>
                            <h1 className='relative text-3xl text-white'>Python</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={70}
                                color="danger"
                                showValueLabel={true}
                                className="max-w-md relative mb-5 text-white"
                            />
                        </div>

                    </div>

                    {/* ---------------------------------------------------------------------- */}
                    <div className=' p-5 extra-skill'>

                        <h1 className='relative text-3xl text-white'>Three.js</h1>
                        <Progress
                            aria-label=""
                            size="sm"
                            value={30}
                            color="warning"
                            showValueLabel={true}
                            className="max-w-md relative mb-5 text-white"
                        />

                        <h1 className='relative text-3xl text-white'>Plotly.js</h1>
                        <Progress
                            aria-label=""
                            size="sm"
                            value={50}
                            color="success"
                            showValueLabel={true}
                            className="max-w-md relative mb-5 text-white"
                        />
                        <h1 className='relative text-3xl text-white'>Qlik Sense</h1>
                        <Progress
                            aria-label=""
                            size="sm"
                            value={60}
                            color="danger"
                            showValueLabel={true}
                            className="max-w-md relative text-white"
                        />
                        <h1 className='relative text-3xl text-white'>Blender</h1>
                        <Progress
                            aria-label=""
                            size="sm"
                            value={60}
                            color=""
                            showValueLabel={true}
                            className="max-w-md relative text-white"
                        />

                        <div>
                            <h1 className='relative text-3xl text-white'>Java</h1>
                            <Progress
                                aria-label=""
                                size="sm"
                                value={70}
                                color="success"
                                showValueLabel={true}
                                className="max-w-md relative mb-5 text-white"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills