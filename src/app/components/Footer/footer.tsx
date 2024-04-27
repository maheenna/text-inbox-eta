import Image from 'next/image'
import React from 'react';
import footer from "../../data.json"

const Footer = () => {
  return (
    <div className='bg-[#0ECFC6] md:rounded-t-[70px] rounded-t-2xl'>
        <div className='pt-[5rem] pb-[2rem] text-[#004D4A] md:mx-[7rem] mx-5 '>
            <div className='grid md:grid-cols-[2fr,1fr,1fr] grid-cols-1 gap-10 md:gap-0 '>
                <div>
                    <div className='flex items-center gap-3'>
                        <Image src={"/images/footerlogo.png"} alt='footer logo' width={200} height={200} className='w-[20px]'/>
                        <h2 className='text-[#004D4A] text-[20px] font-[700]'>{footer.footer.footercol1first}</h2>
                    </div>
                    <p className='mt-4 font-sans md:mr-48'>{footer.footer.footercol1para}</p>
                </div>
                <div>
                    <h2 className='text-[#004D4A] text-[18px] font-[700]'>
                        {footer.footer.footercol2first}
                    </h2>
                    <p className='mt-4 font-sans'>{footer.footer.footercol2second}</p>
                    <p className='mt-2 font-sans'>{footer.footer.footercol2third}</p>
                    <p className='mt-2 font-sans'>{footer.footer.footercol2four}</p>
                    <p className='mt-2 font-sans'>{footer.footer.footercol2five}</p>
                </div>
                <div>
                    <p className='text-[15px]'>
                        <span className='font-[600] text-[18px] '>{footer.footer.footercol3first}</span>
                        <span className='font-sans'>+1-506-851-1343</span>
                    </p>
                    <p className='text-[15px] mt-2'>
                        <span className='font-[600] text-[18px] '>{footer.footer.footercol3second}</span>
                        <span className='font-sans'>info@conceptomedia.ca</span>
                    </p>
                </div>
            </div>
            <div className='md:flex mt-20 items-center font-sans text-[15px]'>
                <p >{footer.footer.footerlast1}</p>
                <p className='md:pl-[20rem] md:mt-0 mt-5'>{footer.footer.footerlast2}</p>
                <p className='md:pl-[5rem] md:mt-0 mt-5'>{footer.footer.footerlast3}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer