"use client"

import Image from "next/image"
import Typerwriter from "typewriter-effect"
import {BsArrowRight} from "react-icons/bs"

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
            <Image src="/images/s1.jpg" alt="hero image" width={150} height={150} className="rounded-full border-8 border-[#0c0c48aa]" />
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
                Creating web products,<br /> brands {" "} 
                <span className="text-cyan-200">and experiences.</span>
            </h1>
            <h2 className="mt-4 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                Hi! I am Nick - A passionate
                <span className="text-cyan-200 font-bold">
                      <Typerwriter options={{
                          strings: [
                            'Frontend Developer',
                            'Web Developer',
                            'Blogger'
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                          deleteSpeed: 50,
                          wrapperClassName: 'pl-2'
                    }} />
                </span>
            </h2>
            <button className="mt-4 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
                <span>See my work</span>
                <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
            </button>
        </div>
    </div>
  )
}

export default Hero