import Image from "next/image"

const Projects = () => {
  return (
    <div id="works" className="py-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl text-white font-bold">
            A small selection of recent 
            <span className="text-cyan-300">projects</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {/* First Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="0" 
                    src="/images/p1.jpg" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Modern Finance Dashboard UI</h1>
                <h1 className="text-white/80 font-medium pt-2">Apps, UI/UX</h1>
            </div>
            {/* Second Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="100" 
                    src="/images/p2.jpg" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Portfolio Website for Creatives</h1>
                <h1 className="text-white/80 font-medium pt-2">Branding, Motion</h1>
            </div>
            {/* Third Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="200" 
                    src="/images/p3.jpg" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Brand identity for Startups</h1>
                <h1 className="text-white/80 font-medium pt-2">Branding, UI/UX</h1>
            </div>
            {/* Fourth Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="300" 
                    src="/images/p4.jpg" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">SaaS Dashboard Development</h1>
                <h1 className="text-white/80 font-medium pt-2">App, UI/UX</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects