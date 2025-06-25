import React from 'react'
import { useState } from 'react';
import {
    ArrowDown,
    ArrowRight,
    MoveRight,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <main className='mx-auto max-w-7xl'>
                <LandingMainSec />
                <ServicesSec />
                <OurValueSec />
                <OurWorkSec />
                <OurCasesSec />
                <ContactSec />
                <FooterSec />
            </main>
        </>
    )
}

export const LandingMainSec = () => {
    return (
        <>
            <section className='relative pt-28 min-h-[80vh]'>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
                        <source src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v5/video/main_screen_04_2024.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='relative z-10 container mx-auto px-2 lg:pl-35'>
                    <h1 className="text-white font-extrabold text-4xl sm:text-6xl leading-tight">
                        Empower your business <br />with <span className="bg-gradient-to-r from-amber-500 via-red-500 to-pink-600 bg-clip-text text-transparent">top-class software development</span>
                    </h1>
                </div>
            </section>
        </>
    )
}

export const ServicesSec = () => {

    const serviceBoxesData = [
        {
            id: 1,
            title: "Staff Augmentation",
            description: "We provide skilled engineers or dedicated teams tailored to your project, seamlessly aligning with your goals and company culture. Our experts work closely with you, becoming an integral part of your team's success.",
            tags: ["Cultural fit", "Top 1%", "Instant hire"],
            imageUrl: "https://diffco.us/wp-content/uploads/2024/08/s-3.svg"
        },
        {
            id: 2,
            title: "Backend Development",
            description: "We build robust and scalable backend systems using modern technologies to power your applications and services.",
            tags: ["Node.js", "Python", "Go", "Java"],
            imageUrl: "https://diffco.us/wp-content/uploads/2024/08/s-2.svg"
        },
        {
            id: 3,
            title: "Mobile Development",
            description: "We create high-performance mobile applications for both iOS and Android platforms using native and cross-platform technologies.",
            tags: ["Swift", "Kotlin", "Flutter", "React Native"],
            imageUrl: "https://diffco.us/wp-content/uploads/2024/08/s-1.svg"
        },
        {
            id: 4,
            title: "AI Development",
            description: "We implement cutting-edge AI solutions including machine learning models and natural language processing systems.",
            tags: ["LLM", "TensorFlow", "Computer Vision", "Python"],
            imageUrl: "https://diffco.us/wp-content/uploads/2024/08/s-4.svg"
        },
        {
            id: 5,
            title: "Front-end Development",
            description: "We are experienced in building modular, high-performance web applications for corporate clients and startups. We utilize modern and robust technology stacks.",
            tags: ["React", "Angular", "Electron", "Vue.js"],
            imageUrl: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-5.png"
        },
        {
            id: 6,
            title: "Web Development",
            description: "Our developers can create web solutions that are tailored to your needs, easy to manage with popular CMS, and which can be seamlessly integrated with your existing internal systems.",
            tags: ["Sitecore", "Contentfull", "Magenta"],
            imageUrl: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-6.svg"
        },
    ];

    return (
        <>
            <section className="py-20 bg-[#f5f5fb]">
                <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-6'>
                    <div className='font-bold text-4xl text-center mb-15'>Our Services</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-1 '>
                        {serviceBoxesData.map((service) => (
                            <div
                                key={service.id}
                                className='bg-white rounded-lg flex flex-col-reverse md:flex-row items-center justify-between gap-2 p-4 md:p-8 cursor-pointer'
                            >
                                <div className='flex flex-col gap-5 flex-3/5'>
                                    <h4 className='text-lg md:text-2xl font-bold mb-2 md:mb-3'>{service.title}</h4>
                                    <p className='text-sm'>{service.description}</p>
                                    <div className='flex gap-2 items-center flex-wrap max-h-6 overflow-hidden'>
                                        {service.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className='bg-gray-100 px-3 py-1 rounded-full text-xs'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <NavLink to='#' className='bg-[#131426] border-1 border-[#131426] py-2 px-5 sm:px-3 text-white flex items-center justify-center gap-2 sm:w-min rounded hover:bg-[rgba(19,20,38,0.8)] hover:border-[rgba(19,20,38,0.8)] transition-colors duration-200'>
                                        <span className='sm:w-15 text-xs font-semibold pl-2 sm:pl-0 '>Let's Chat</span><span><MoveRight size={18} /></span>
                                    </NavLink>
                                </div>
                                <div className=''>
                                    <img src={service.imageUrl} alt={service.title} className="h-40 w-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export const OurValueSec = () => {

    const valuesData = [
        {
            id: 1,
            title: "Clear communication",
            description: "We build relationships based on integrity and trust, delivering on our promises and maintaining clear communication at all times.",
            icon: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/ic-values-1.svg",
            alt: "Clear communication"
        },
        {
            id: 2,
            title: "Customer-Centric Approach",
            description: "We prioritize our clients' success, understand your unique needs, and deliver tailored solutions that drive your business growth.",
            icon: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/ic-values-2.svg",
            alt: "Customer-Centric Approach"
        },
        {
            id: 3,
            title: "Innovation and Excellence",
            description: "As a team on the cutting edge of technology trends, we consistently deliver innovative, high-quality solutions.",
            icon: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/ic-values-3.svg",
            alt: "Innovation and Excellence"
        },
    ];

    return (
        <>
            <section
                className="py-20 text-white bg-cover bg-center md:h-[600px]"
                style={{
                    backgroundImage: 'url(https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/our-values-bg@2x.jpg)'
                }}
            >
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
                    <h2 className="font-bold text-4xl text-center mb-15">
                        Our values
                    </h2>

                    <div className="flex flex-wrap -mx-2 mb-28">
                        {valuesData.map((value) => (
                            <div key={value.id} className="w-full md:w-1/3 px-2 mb-4">
                                <div className="bg-white/5 rounded-lg p-12 h-full">
                                    <div className="mb-10">
                                        <img
                                            src={value.icon}
                                            alt={value.alt}
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="text-2xl font-bold mb-4">{value.title}</h5>
                                        <p className="text-base">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export const OurWorkSec = () => {

    const [openSection, setOpenSection] = useState(null);
    const toggleContent = (sectionIndex) => {
        setOpenSection(openSection === sectionIndex ? null : sectionIndex);
    };

    return (
        <>
            <section className="bg-gradient-to-b from-[#f7efe3] to-[#f7e4e3] flex gap-2">
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 md:w-3/5">
                    <div className="flex flex-col justify-end py-16 pr-5 bg-gradient-to-b from-[#f7efe3] to-[#f7e4e3] text-[#131426]">
                        <div className="px-3 py-1 mb-6 text-xs font-bold uppercase border border-[#131426]/10 rounded-full bg-gradient-to-r from-[#9935e8] to-[#e85535] bg-clip-text text-transparent w-min">
                            Processes
                        </div>

                        <h3 className="font-bold text-4xl mb-10">How we build</h3>


                        <div className='max-w-full'>
                            <div className="border-t border-dashed border-[#c6b9a4] pt-6 mb-6">
                                <div className="flex">
                                    <div className="w-16">
                                        <img
                                            src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/discovery-stage-icon.png"
                                            alt="Discovery stage"
                                            className="w-10 h-10 mr-14"
                                        />
                                    </div>
                                    <div className="w-11/12">
                                        <h5 className="text-xl font-bold mb-3 flex items-center justify-between">
                                            "Discovery stage"
                                            <div className='text-[#a89d8d] hover:text-black cursor-pointer' onClick={() => toggleContent(0)}>
                                                <ArrowDown className={`transition-transform ${openSection === 0 ? 'rotate-180' : ''}`} />
                                            </div>
                                        </h5>
                                        <p className="text-sm mb-4">
                                            We prioritize our clients' success, understanding your unique needs, and delivering tailored solutions that drive your business growth. The workflow roll-out is usually:
                                        </p>

                                        {openSection === 0 && (
                                            <div className="flex flex-col mt-6 gap-2 w-full">
                                                <div className="flex items-center bg-white p-4 rounded-lg w-full">
                                                    <div className="min-w-[44px] text-2xl">1</div>
                                                    <div className="w-full">
                                                        <h6 className="text-base font-bold">Get to Know your project</h6>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col md:flex-row gap-2 w-full">
                                                    <div className="flex items-center bg-white p-4 rounded-lg w-full md:w-1/2">
                                                        <div className="min-w-[44px] text-2xl">2</div>
                                                        <div className="w-full">
                                                            <h6 className="text-base font-bold">R&D</h6>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-white p-4 rounded-lg w-full md:w-1/2">
                                                        <div className="min-w-[44px] text-2xl">3</div>
                                                        <div className="w-full">
                                                            <h6 className="text-base font-bold">PRD and wireframes development</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center bg-white p-4 rounded-lg w-full">
                                                    <div className="min-w-[44px] text-2xl">4</div>
                                                    <div className="w-full">
                                                        <h6 className="text-base font-bold">Development plan and estimate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-dashed border-[#c6b9a4] pt-6 mb-6">
                                <div className="flex">
                                    <div className="w-16">
                                        <img
                                            src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/development-stage-icon.png"
                                            alt="Development stage"
                                            className="w-10 h-10 mr-14"
                                        />
                                    </div>
                                    <div className="w-11/12">
                                        <h5 className="text-xl font-bold mb-3 flex items-center justify-between">
                                            "Development stage"
                                            <div className='text-[#a89d8d] hover:text-black cursor-pointer' onClick={() => toggleContent(1)}>
                                                <ArrowDown className={`transition-transform ${openSection === 1 ? 'rotate-180' : ''}`} />
                                            </div>
                                        </h5>
                                        <p className="text-sm mb-4">
                                            We develop your product in iterative substages, allowing for regular testing, feedback, and adjustments to ensure alignment with your expectations.
                                        </p>
                                        {openSection === 1 && (
                                            <div className="flex flex-col md:flex-row gap-2 mt-8 w-full">
                                                <div className="flex md:flex-col md:justify-center items-center bg-white p-4 rounded-lg w-full md:w-1/6">
                                                    <div className="min-w-[44px] text-2xl">1</div>
                                                    <div className="w-full">
                                                        <h6 className="text-base font-bold">Design</h6>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-2 w-full md:w-5/6">
                                                    <div className="flex items-center bg-white p-4 rounded-lg w-full">
                                                        <div className="min-w-[44px] text-2xl">2</div>
                                                        <div className="w-full">
                                                            <h6 className="text-base font-bold">Mobile development</h6>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-white p-4 rounded-lg w-full">
                                                        <div className="min-w-[44px] text-2xl">3</div>
                                                        <div className="w-full">
                                                            <h6 className="text-base font-bold">Web development</h6>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-white p-4 rounded-lg w-full">
                                                        <div className="min-w-[44px] text-2xl">4</div>
                                                        <div className="w-full">
                                                            <h6 className="text-base font-bold">Back-end development</h6>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-white p-4 rounded-lg w-full">
                                                        <div className="min-w-[44px] text-2xl">5</div>
                                                        <div className="w-full">
                                                            <h6 className="text-base font-bold">AI development</h6>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-white p-4 rounded-lg w-full">
                                                        <div className="min-w-[44px] text-2xl">6</div>
                                                        <div className="w-full">
                                                            <h6 className="text-base font-bold">QA</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-dashed border-[#c6b9a4] pt-6 mb-6">
                                <div className="flex">
                                    <div className="w-16">
                                        <img
                                            src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/continous-development-support-icon.png"
                                            alt="Continuous development and support"
                                            className="w-10 h-10 mr-14"
                                        />
                                    </div>
                                    <div className="w-11/12">
                                        <h5 className="text-xl font-bold mb-3 flex items-center justify-between">
                                            Continuous development and support
                                            <div className='text-[#a89d8d] hover:text-black cursor-pointer' onClick={() => toggleContent(2)}>
                                                <ArrowDown className={`transition-transform ${openSection === 2 ? 'rotate-180' : ''}`} />
                                            </div>
                                        </h5>
                                        <p className="text-sm mb-4">
                                            Post-launch, we provide ongoing support, troubleshoot issues, and develop additional features to keep your product up-to-date and valuable.
                                        </p>
                                        {openSection === 2 && (
                                            <div className="flex flex-col md:flex-row gap-2 mt-6 w-full">
                                                <div className="flex flex-col justify-start bg-white p-4 rounded-lg w-full md:w-1/3 gap-1">
                                                    <div className="text-xl md:text-2xl">1</div>
                                                    <h6 className="text-sm md:text-base font-bold">Launch</h6>
                                                </div>
                                                <div className="flex flex-col bg-white p-4 rounded-lg w-full md:w-1/3 gap-1">
                                                    <div className="text-xl md:text-2xl">2</div>
                                                    <h6 className="text-sm md:text-base font-bold">Support</h6>
                                                </div>
                                                <div className="flex flex-col bg-white p-4 rounded-lg w-full md:w-1/3 gap-1">
                                                    <div className="text-xl md:text-2xl">3</div>
                                                    <h6 className="text-sm md:text-base font-bold">Ongoing development</h6>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <NavLink to='#' className='bg-[#131426] border-1 border-[#131426] py-2 px-5 text-white flex items-center justify-between gap-2 w-full md:w-min rounded hover:bg-[rgba(19,20,38,0.8)] hover:border-[rgba(19,20,38,0.8)] transition-colors duration-200'>
                                <span className='md:w-16 text-xs font-bold pl-2 sm:pl-4 md:pl-0'>Let's Chat</span><span><MoveRight size={18} className='' /></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-2/5">
                    <img src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/process-picture@3x.jpg" className='h-full' />
                </div>
            </section>
        </>
    )
}

export const OurCasesSec = () => {

    const portfolioItems = [
        {
            id: 1,
            title: "Tech Website",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            imageUrl: "https://storage.googleapis.com/a1aa/image/cdfb68b6-5071-4ee2-02d0-a1b8f50eb646.jpg",
            altText: "Laptop showing a tech website with a 3D character sitting on a purple platform and text Web Development",
            reverse: false
        },
        {
            id: 2,
            title: "Real Estate Website",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            imageUrl: "https://storage.googleapis.com/a1aa/image/31ab3922-39b9-4e67-1604-85c522f830f5.jpg",
            altText: "Laptop showing a real estate website with a blue header and search bar for properties",
            reverse: true
        },
        {
            id: 3,
            title: "Fashion Website",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            imageUrl: "https://storage.googleapis.com/a1aa/image/b2e6c92d-080d-4305-0492-c339252fd5db.jpg",
            altText: "Laptop showing a fashion website with a grid of models wearing trendy clothes",
            reverse: false
        },
        {
            id: 4,
            title: "Food Website",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            imageUrl: "https://storage.googleapis.com/a1aa/image/a7b03cab-0e1b-4f5e-a220-f3da37edb79a.jpg",
            altText: "Laptop showing a food website with an orange header and green bottle pouring liquid",
            reverse: true
        }
    ];

    return (
        <>
            <section className='py-20 bg-[#f5f5fb] relative overflow-hidden'>

                <h3
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[7rem] sm:text-[10rem] font-extrabold 
             text-transparent opacity-40 select-none pointer-events-none z-0
             font-sans tracking-[0.5rem]"
                    style={{
                        WebkitTextStroke: '1px rgba(0, 0, 0, 0.15)',
                        textStroke: '1px rgba(0, 0, 0, 0.15)'
                    }}
                >
                    Our WORKS
                </h3>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
                    <h2 className="font-bold text-3xl sm:text-4xl text-center mb-8 sm:mb-12">
                        Our Cases
                    </h2>

                    <div className="space-y-12 sm:space-y-16">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10 lg:gap-12`}
                            >
                                <div className="w-full md:w-1/2 lg:w-[48%] flex justify-center">
                                    <div className="relative w-full max-w-[400px] md:max-w-[500px] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(13,122,255,0.2)] hover:shadow-[0_0_30px_rgba(13,122,255,0.3)] transition-all duration-300 group">
                                        <img
                                            alt={item.altText}
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            src={item.imageUrl}
                                            width={500}
                                            height={280}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 lg:w-[48%] space-y-3 sm:space-y-4 mt-4 sm:mt-0">
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="pt-1 sm:pt-2">
                                        <NavLink
                                            to="#"
                                            className="inline-block px-5 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-[#914dff] border border-[#914dff] rounded-full hover:bg-[#914dff] hover:text-white transition-colors duration-300"
                                        >
                                            View Case Study
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export const ContactSec = () => {
    return (
        <>
            <section className="flex justify-center pb-20" style={{ background: "linear-gradient(to right, #5322e7, #2153f6)" }}>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 flex flex-col md:flex-row text-white">
                    <div className="flex flex-col justify-between md:w-1/2 pt-20 md:h-[512px]">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-left">
                                Let's build something<br />great together
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg w-[90%]">
                                We believe in turning ideas into reality and we're ready to join your journey. Reach out to
                                us and let's start discussing your project.
                            </p>
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
        </>
    )
}

export const FooterSec = () => {

    const footerData = [
        {
            title: "Our Services",
            items: [
                "Team augmentation",
                "Mobile Development",
                "Back-end Development",
                "Front-end Development",
                "Web Development"
            ]
        },
        {
            title: "Solutions",
            items: [
                "AI-driven software",
                "Enterprise development",
                "Custom Development",
                "Healthcare Development"
            ]
        },
        {
            title: "Cases",
            items: [
                "Ecommerce store",
                "Point of sales (POS)",
                "Powerful website for the enterprise",
                "ERP for a new gen real estate",
                "Computer vision for ID recognition",
                "See more cases"
            ]
        },
        {
            title: "Company",
            items: [
                "Who we are",
                "Clients",
                "Jobs",
                "Contacts"
            ]
        }
    ];

    const icons = [
        {
            id: 1,
            imageUrl: "https://img.icons8.com/?size=256&id=8808&format=png"
        },
        {
            id: 2,
            imageUrl: "https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png"
        },
        {
            id: 3,
            imageUrl: "https://img.icons8.com/?size=50&id=LtK9OaHTp1cv&format=png"
        },
    ]

    return (
        <>
            <footer className="border-t border-[#e6e6ef] bg-white text-[#131426] pb-16"
                style={{
                    background: 'radial-gradient(34.45% 46.83% at 77.4% 50%, rgba(161, 28, 208, 0.1) 0, rgba(19, 20, 38, 0) 100%), radial-gradient(30.13% 51.49% at 18.2% 43.83%, rgba(208, 93, 28, 0.1) 0, rgba(19, 20, 38, 0) 100%), #fff'
                }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="md:hidden py-8 space-y-8">
                        <div className="flex flex-col space-y-6">
                            {footerData.map((section, index) => (
                                <div key={index}>
                                    <h3 className="font-bold text-lg mb-4 tracking-tight">{section.title}</h3>
                                    <ul className="space-y-4 cursor-pointer">
                                        {section.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="transition-all duration-150 hover:text-[#131426]/60"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-[#ebebeb]">
                            <div className='text-lg font-semibold'>
                                <span className="text-violet-600">Synergy</span> Algo
                            </div>
                            <div className="flex flex-col space-y-2 text-xs mt-3">
                                <p>+1 (415) 655-1002</p>
                                <p>333 W San Carlos St Suite 600, San Jose, CA, USA, 95110</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 pt-6 border-t border-[#f7f7f9]">
                            <div className="flex items-center justify-between">
                                <div className="text-xs">PCTL DSS</div>
                                <div className="flex items-center text-xs">
                                    <NavLink to="#" className="underline">Privacy Policy</NavLink>
                                    <span className="text-[#b1b2c1] mx-2">|</span>
                                    <span>© 2025, Difco US Inc.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="py-20">
                            <ul className="flex flex-wrap items-start gap-16">
                                {footerData.map((section, index) => (
                                    <li key={index} className="flex-1 min-w-[200px]">
                                        <h3 className="font-bold text-xl mb-6">{section.title}</h3>
                                        <ul className="space-y-6 cursor-pointer">
                                            {section.items.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="transition-all duration-150 hover:text-[#131426]/60"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-row py-10 border-t border-[#f7f7f9] items-center justify-between gap-20">
                            <div className="flex-1 flex flex-row justify-between items-center">
                                <div className="text-xl font-bold tracking-tight">
                                    <span className="text-neutral-900">Synergy</span>
                                    <span className="text-red-600 ml-1">Algo</span>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-xs">+1 (415) 655-1002</p>
                                    <div className=" text-[#b1b2c1] px-2">|</div>
                                    <p className="text-xs">830 Stewart Drive, #212, Sunnyvale, CA, USA, 94085</p>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-row justify-between items-center">
                                <div className="flex gap-2">
                                    {icons.map((img, index) => (
                                        <div key={img.id}>
                                            <img src={img.imageUrl} className="w-8 h-8 invert-75 hover:invert-25 cursor-pointer" alt={`icon-${index}`} />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center">
                                    <NavLink to="#" className="text-xs underline">Privacy Policy</NavLink>
                                    <div className="text-[#b1b2c1] mx-3">|</div>
                                    <div className="text-xs">© 2025, Synergy Algo Inc.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export const OurTechnologySec = () => {
    const [activeTab, setActiveTab] = useState('Front-end');

    const tabs = [
        'Front-end',
        'Back-end',
        'Mobile app',
        'Database',
        'CMS',
        'Server'
    ];

    const techContent = {
        'Front-end': [
            {
                name: 'React',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
            },
            {
                name: 'Tailwind CSS',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'
            },
            {
                name: 'Next.js',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
            }
        ],
        'Back-end': [
            {
                name: 'Node.js',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
            },
            {
                name: 'Express',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/express-109.svg'
            }
        ],
        'Mobile app': [
            {
                name: 'React Native',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg'
            },
            {
                name: 'Flutter',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/flutter.svg'
            }
        ],
        'Database': [
            {
                name: 'MongoDB',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'
            },
            {
                name: 'MySQL',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg'
            },
            {
                name: 'PostgreSQL',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg'
            }
        ],
        'CMS': [
            {
                name: 'WordPress',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg'
            },
            {
                name: 'Shopify',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/shopify.svg'
            }
        ],
        'Server': [
            {
                name: 'AWS',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg'
            },
            {
                name: 'Firebase',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg'
            }
        ]
    };
    
    return (
        <>
            <section className="py-20 bg-[#f5f5fb]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-bold text-4xl text-center mb-15">
                        Technology we use
                    </h2>

                    <div className="flex overflow-x-auto pb-2 mb-8" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                        <div className="flex space-x-1 mx-auto p-1 rounded-lg">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm bg-gray-800 font-semibold rounded-full whitespace-nowrap transition-colors ${activeTab === tab
                                        ? 'bg-[#0c141c] shadow-sm text-white'
                                        : 'text-gray-200 hover:bg-[#0c141cea]'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center justify-center">
                            {techContent[activeTab].map((tech, index) => (
                                <div
                                    key={index}
                                    className="rounded-md p-4 w-full flex flex-col items-center transition-all hover:scale-105 hover:shadow-lg bg-white"
                                >
                                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                                        <img
                                            src={tech.imgURL}
                                            alt={tech.name}
                                            className="h-12 w-auto object-contain"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 text-center">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
