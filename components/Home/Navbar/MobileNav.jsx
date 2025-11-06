import { NavLinks } from "@/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"


const MobileNav = ({closeNav, showNav}) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed inset-0 ${navOpen} right-0 transform translate-all duration-500 z-100002 bg-black opacity-70 w-full h-screen`}></div>

      {/* NavLinks */}
      <div className={`fixed text-white ${navOpen} flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-100050 right-0`}>
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-xl text-white w-fit border-b-[1.5px] pb-1 border-white ml-12 sm:text-[30px]">{link.label}</p>
            </Link>
          )
        })}

        {/* Close icon */}
        <CgClose onClick={closeNav} className="absolute top-8 right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
      </div>
    </div>
  )
}

export default MobileNav