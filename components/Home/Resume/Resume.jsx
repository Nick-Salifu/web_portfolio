import { FaCodepen, FaReact } from "react-icons/fa"
import ResumeCard from "./ResumeCard"
import { BsDatabase } from "react-icons/bs"
import { BiBadge } from "react-icons/bi"

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* Work part */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">My Work <span className="text-cyan-200">Experience</span></h1>
                <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen} role="Frontend Developer" />
                    <ResumeCard Icon={FaReact} role="Frontend Developer" />
                    <ResumeCard Icon={BsDatabase} role="Frontend Developer" />
                </div>
            </div>
            
            {/* EDUCATION SECTION */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">My <span className="text-cyan-200">Education</span></h1>
                <div className="mt-10" data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ResumeCard Icon={BiBadge} role="Code Academy" date="Jan 2020 - Feb 2020" />
                    <ResumeCard Icon={FaReact} role="Bachelors' Degree in ICT" date=" Feb 2024 - Dec 2025" />
                    <ResumeCard Icon={BsDatabase} role="Frontend Bootcamp" date="Mar 2025 - Sep 2025" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume