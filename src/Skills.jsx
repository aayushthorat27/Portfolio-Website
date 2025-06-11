import Particles from './Particles';
import DecryptedText from './DecryptedText';

const array = ['Programming Languages', 'Frameworks/Libraries', 'Databases', 'Tools/Platforms'];



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
            <div className="flex gap-5 text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {array.map(element => (
                    <DecryptedText
                    text={element}
                    speed={70}
                    sequential={true}
                    animateOn="view"
                    revealDirection="start"
                    />
                ))}
            </div>
        </div>
    )

}

export default Skills;