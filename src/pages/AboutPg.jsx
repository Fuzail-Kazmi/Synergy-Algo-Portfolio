import React from 'react'
import { MoveRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { ContactSec, FooterSec, OurValueSec, OurWorkSec, ServicesSec } from './Home'

export const AboutPg = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl'>
                <section className="pt-20 bg-[#f5f5fb]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className='font-bold text-4xl text-center mb-10'>About us</div>
                            <div className='flex flex-col md:justify-center md:items-center gap-4 bg-white p-5 rounded-md'>
                                <p className="text-sm sm:text-base text-gray-600 mx-auto">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                                <NavLink to='#' className='bg-[#131426] border-1 border-[#131426] py-2 px-5 sm:px-3 text-white flex items-center justify-center gap-2 sm:w-min rounded hover:bg-[rgba(19,20,38,0.8)] hover:border-[rgba(19,20,38,0.8)] transition-colors duration-200'>
                                    <span className='sm:w-15 text-xs font-bold pl-2 sm:pl-0 '>See more</span><span><MoveRight size={18} /></span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                <ServicesSec />
                <OurValueSec />
                <OurWorkSec />
                <ContactSec/>
                <FooterSec/>
            </div>
        </>
    )
}
