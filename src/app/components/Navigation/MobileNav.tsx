import React from 'react'
import { ImCross } from 'react-icons/im'
import navlinks from "../../../app/data.json"
import Link from "next/link"
interface Props {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: Props) => {

  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 bottom-0 top-0 bg-[#000000e0] h-[100vh] z-[1002]`}>
      <ImCross  className='absolute top-[2rem] right-[1rem] w-[2rem] h-[2rem] text-white' />
      {/* Nav Divs */}
      <div className={`bg-[#0ECFC6] ${navStyle} transition-all duraton-500 delay-200 pl-12 pt-[2.2rem] flex flex-col justify-start w-[50%] h-[100%]`} onClick={closeNav}>

        {/* Nav Links */}
        <ul className='space-y-10 font-sans'>
                        
                        {
                        (navlinks.navLinks as { firstlink: string;  href:string; }[]).map((link, index) => (
                            
                          <Link href={link.href}>
                                    <li className='text-[23px] font-bold my-8'>
                                    {link.firstlink}
                                    </li>
                                
                            </Link>
                        ))
                    }
                        
          
          
        </ul>
      </div>
    </div>
  )
}

export default MobileNav