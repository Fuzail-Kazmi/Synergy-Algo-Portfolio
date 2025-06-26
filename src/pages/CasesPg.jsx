import React from 'react'
import { useState } from 'react';
import { Shield, Cloud, Globe, ShoppingCart, TrendingUp, Smartphone, ArrowRight, Lock } from 'lucide-react';
import { ContactSec } from './Home'

export const CasesPg = () => {
  return (
    <>
      <CaseDetail />
      <ContactSec />
    </>
  )
}


const cases = [

  {
    title: "We led the infrastructure migration to a new AWS-based architecture and assisted in product growth",
    description: "An innovative solution providing keyless, touchless, and mobile-enabled access to protected storage and rooms in the business and retail environments, creating a sense of confidence and assurance for all users.",
    imgURL: 'https://diffco.us/wp-content/uploads/2023/07/good2go-image.png',
    tags: ["AWS", "PERFORMANCE AND LOAD TESTING", "ACCESS"]
  },
];

const industries = [
  { name: "Government", icon: <Shield className="w-4 h-4" /> },
  { name: "Healthcare", icon: <Cloud className="w-4 h-4" /> },
  { name: "Media & Entertainment", icon: <Globe className="w-4 h-4" /> },
  { name: "Retail", icon: <ShoppingCart className="w-4 h-4" /> },
  { name: "Stock", icon: <TrendingUp className="w-4 h-4" /> },
  { name: "Security", icon: <Shield className="w-4 h-4" /> },
  { name: "Tech", icon: <Smartphone className="w-4 h-4" /> },
  { name: "Travel", icon: <Globe className="w-4 h-4" /> },
];

export const CaseDetail = () => {
  const [activeIndustry, setActiveIndustry] = useState("Government");

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#c5c5ff] to-gray-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-200 to-transparent h-1/2 z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <h2 className="font-bold text-4xl text-center mb-15">
            Our Cases
          </h2>

          <div className="relative mb-8">
            <div className="lg:flex lg:justify-center lg:items-center overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex flex-nowrap justify-start gap-2 min-w-max px-4">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndustry(industry.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 cursor-pointer whitespace-nowrap transition-colors duration-200 ${activeIndustry === industry.name
                      ? 'bg-black text-white shadow-md'
                      : 'bg-white text-gray-700 shadow-sm hover:bg-gray-100'
                      }`}
                  >
                    {industry.icon}
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg"
              >
                <div className="p-6 sm:p-8 md:p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col-reverse md:flex-row items-start gap-4 mb-4">
                        <div className='flex flex-col justify-between gap-4 lg:h-[35vh] lg:pt-15'>
                          <h3 className="text-xl sm:text-2xl font-bold md:w-[80%]">{caseItem.title}</h3>
                          <div className='flex gap-2 items-center flex-wrap'>
                            {caseItem.tags.map((tag, index) => (
                              <span
                                key={index}
                                className='bg-gray-300 px-2 py-0.5 md:py-1 rounded-full text-xs'
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 mb-4 md:w-[80%]">{caseItem.description}</p>
                          <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase border border-[#131426]/10 rounded-full bg-gradient-to-r from-[#9935e8] to-[#e85535] bg-clip-text text-transparent w-max cursor-pointer">
                            View Case Study <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#e85535]" />
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-blue-50 rounded-lg h-80 md:h-full w-full">
                          <img src={caseItem.imgURL} className='h-full w-full object-contain' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
