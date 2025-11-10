import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi"
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const Contact = () => {
    return (
        <div className="py-16">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] grid grid-cols-1 items-center gap-10 mx-auto lg:grid-cols-2">
                {/* Text section */}
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                        Schedule a call with me to see how I can help
                    </h1>
                    <p className="text-gray-400 mt-6 text-base lg:text-lg">
                        Reach out to me today let's see how I can help you achieve your goals
                    </p>

                    {/* Info */}
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiPhone className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-cyan-400">+2348023603415</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiEnvelope className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-cyan-400">nicksalifu@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiMap className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-cyan-400">Abuja, Nigeria</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex items-center space-x-3 mt-8">
                        <div className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center flex-col cursor-pointer hover:bg-blue-800 transition-all duration-300">
                            <FaFacebookF className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center flex-col cursor-pointer hover:bg-sky-400 transition-all duration-300">
                            <FaTwitter className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center flex-col cursor-pointer hover:bg-black transition-all duration-300">
                            <FaGithub className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center flex-col cursor-pointer hover:bg-pink-400 transition-all duration-300">
                            <FaInstagram className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div
                    className="p-5 md:p-10 rounded-lg bg-[#131332]"
                    data-aos="zoom-in" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="100"
                >
                    <input type="text" placeholder="Name" className="px-4 py-3.5 text-white outline-none rounded-md w-full bg-[#363659] placeholder:text-white/70" />
                    <input type="email" placeholder="Email Address" className="px-4 mt-6 py-3.5 text-white outline-none rounded-md w-full bg-[#363659] placeholder:text-white/70" />
                    <input type="number" placeholder="Mobile Number" className="px-4 mt-6 py-3.5 text-white outline-none rounded-md w-full bg-[#363659] placeholder:text-white/70" />
                    <textarea placeholder="Your Message" className="px-4 mt-6 py-3.5 text-white outline-none rounded-md w-full bg-[#363659] placeholder:text-white/70 h-40"></textarea>
                    <button className="mt-8 px-12 py-4 bg-blue-950 text-white hover:bg-blue-900 rounded-full transition-all duration-300 cursor-pointer">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact