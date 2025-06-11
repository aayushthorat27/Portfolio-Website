import React from "react";
import LetterGlitch from "./LetterGlitch";
import Skills from "./Skills";

const Hero = () => {
    return (
        <div className="relative w-full h-[20%]">
            <LetterGlitch />
            <Skills />
            {/* <div className="relative z-10 h-2 bg-white">
                <p></p>
            </div> */}
        </div>
    )
}

export default Hero;