import Particles from './Particles';
import DecryptedText from './DecryptedText';

// const array = ['Programming Languages', 'Frameworks / Libraries', 'Databases', 'Tools / Platforms'];
const array = ['Programming Languages', 'Frameworks / Libraries', 'Tools / Platforms'];
const prog_langs = ['C/C++', 'Python', 'Java', 'HTML/CSS', ''];
const frameworks = ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'GSAP', 'Three.js'];


const Skills = () => {

    return (
        <div className="relative text-[#ccccc4] z-10 w-full flex sm:items-center font-bold h-screen bg-[#080807] overflow-hidden">
            <Particles
                moveParticlesOnHover={true} 
            />
            
            <div className="absolute left-4 text-5xl sm:text-7xl ml-5">
                <DecryptedText
                text="Skills"
                speed={70}
                sequential={true}
                animateOn="view"
                revealDirection="start"
                />
            </div>
            <div className="flex gap-10  sm:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {array.map(element => (
                    <div className='flex flex-col gap-10'>
                        <DecryptedText
                        text={element}
                        speed={70}
                        sequential={true}
                        animateOn="view"
                        revealDirection="start"
                        />
                        <div className='flex flex-col gap-2 sm:gap-5 text-center'>
                            {prog_langs.map(lang => (
                                <DecryptedText
                                text={lang}
                                speed={70}
                                sequential={true}
                                animateOn="view"
                                revealDirection="start"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='flex flex-row gap-x-28 absolute top-1/2 sm:top-[60%] left-1/3 transform -translate-x-1/2 -translate-y-1/2'> */}
                {/* <div className="flex flex-col text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
                {/* <div className="flex flex-col gap-5 sm:text-2xl">
                    {prog_langs.map(lang => (
                        <DecryptedText
                        text={lang}
                        speed={70}
                        sequential={true}
                        animateOn="view"
                        revealDirection="start"
                        />
                    ))}
                </div>
                <div className="flex flex-col sm:text-2xl ">
                    {prog_langs.map(lang => (
                        <DecryptedText
                        text={lang}
                        speed={70}
                        sequential={true}
                        animateOn="view"
                        revealDirection="start"
                        />
                    ))}
                </div> */}
            {/* </div> */}
        </div>
    )

}

export default Skills;