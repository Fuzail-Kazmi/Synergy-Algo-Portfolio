import React from 'react'
import { ArrowRight } from 'lucide-react';
import { FooterSec } from './Home'

export const ContactPg = () => {
  return (
    <>
      <section className=" flex justify-center pb-20 md:h-[95vh]" style={{ background: "linear-gradient(to right, #5322e7, #2153f6)" }}>
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 flex flex-col md:flex-row text-white w-full">
          <div className="flex flex-col justify-between md:w-1/2 pt-20 md:h-[512px]">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-left">
                Contacts
              </h1>
              <div className='flex flex-col gap-1'>
              <p className="text-sm md:text-base lg:text-lg w-[90%]">
                +1 20303 3023
              </p>
              <p className="text-sm md:text-base lg:text-lg w-[90%]">
                synergyalgo@gmail.com
              </p>
              <p className="text-sm md:text-base lg:text-lg w-[90%]">
                abc road ST#420 <br/> United states of haripur
              </p>
              </div>
            </div>
            <div className='hidden md:block sm:text-2xl text-shadow-black text-red-300/30 font-semibold '>
              Synergy Algo
            </div>
          </div>

          <div className="md:w-1/2 mt-[85px]">
            <form>
              <div className="space-y-4">
                <div className="flex gap-2 md:gap-4">
                  <div className="w-full">
                    <label htmlFor="first_name" className="block mb-1 text-sm">First name</label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full h-8 md:h-11  bg-transparent border border-[#7795ff] rounded-md px-2 py-1 md:p-3"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="last_name" className="block mb-1 text-sm">Last name</label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full h-8 md:h-11  bg-transparent border border-[#7795ff] rounded-md px-2 py-1 md:p-3"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="comp_name" className="block mb-1 text-sm">Company name (optional)</label>
                  <input
                    type="text"
                    id="comp_name"
                    className="w-full h-8 md:h-11  bg-transparent border border-[#7795ff] rounded-md px-2 py-1 md:p-3"
                  />
                </div>

                <div className="flex gap-2 md:gap-4">
                  <div className="w-full">
                    <label htmlFor="email" className="block mb-1 text-sm">Work email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full h-8 md:h-11  bg-transparent border border-[#7795ff] rounded-md px-2 py-1 md:p-3"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="contact_num" className="block mb-1 text-sm">Phone number</label>
                    <input
                      type="tel"
                      id="contact_num"
                      className="w-full h-8 md:h-11  bg-transparent border border-[#7795ff] rounded-md px-2 py-1 md:p-3"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="about_project" className="block mb-1 text-sm">Tell us about your project (optional)</label>
                  <textarea
                    id="about_project"
                    rows={5}
                    className="w-full bg-transparent border border-[#7795ff] rounded-md px-2 py-1 md:p-3"
                  ></textarea>
                </div>

                <button className="flex items-center justify-center gap-2 w-full md:w-60 rounded-lg bg-white text-[#131426] font-semibold md:font-semibold md:text-lg text-sm px-0 py-2  hover:bg-white/90 transition cursor-pointer">
                  Send request
                  <ArrowRight className='h-4 md:h-6 w-5 md:w-6' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FooterSec />
    </>
  )
}
