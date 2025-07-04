import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const Footer = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

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
        // {
        //     title: "Cases",
        //     items: [
        //         "Ecommerce store",
        //         "Point of sales (POS)",
        //         "Powerful website for the enterprise",
        //         "ERP for a new gen real estate",
        //         "Computer vision for ID recognition",
        //         "See more cases"
        //     ]
        // },
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
    ];

    return (
        <footer
            className="pt-20 bg-[#f5f5fb]"
            style={{
                background: 'radial-gradient(34.45% 46.83% at 77.4% 50%, rgba(161, 28, 208, 0.1) 0, rgba(19, 20, 38, 0) 100%), radial-gradient(30.13% 51.49% at 18.2% 43.83%, rgba(208, 93, 28, 0.1) 0, rgba(19, 20, 38, 0) 100%), #fff'
            }}
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
                <div className="md:hidden py-8 space-y-6 border-t border-[#e6e6ef]">
                    <div className="flex flex-col space-y-4">
                        {footerData.map((section, index) => (
                            <div key={index} className="overflow-hidden">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="flex items-center justify-between w-full font-bold text-lg mb-2 tracking-tight"
                                >
                                    <span>{section.title}</span>
                                    {expandedSections[index] ? (
                                        <ArrowDown className="h-7 w-7 transition-transform duration-200 bg-gray-200/50 p-1.5 rounded-full" />
                                    ) : (
                                        <ArrowRight className="h-7 w-7 transition-transform duration-200 bg-gray-200/50 p-1.5 rounded-full" />
                                    )}
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${expandedSections[index]
                                        ? 'max-h-[500px] opacity-100 py-4'
                                        : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <ul className="space-y-8 py-4">
                                        {section.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="transition-all duration-150 hover:text-[#131426]/60 text-sm"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col'>
                        <div className="flex flex-col gap-5 pt-6 border-t border-[#ebebeb]">
                            <div className='w-35'>
                                <img src="https://media.discordapp.net/attachments/1019570480782524478/1387922389081526373/synergyalgo-logo.png?ex=685fc3b3&is=685e7233&hm=a533dbac40a5cf017d77bbf0fbfce0a8f8c65c29dcb23f9f6bfdc5f7c834c179&=&format=webp&quality=lossless" alt="Logo" className='w-full h-full object-contain' />
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs text-gray-500">+1 (415) 655-1002</p>
                                <span className='text-xs text-gray-500'>|</span>
                                <p className="text-xs text-gray-500">synergyalgo@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col pt-6 border-t border-[#f7f7f9]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-xs">
                                    <NavLink to="#" className="underline">Privacy Policy</NavLink>
                                    <span className="text-[#b1b2c1] mx-2">|</span>
                                    <span>© 2025, Syenergy Algo Inc.</span>
                                </div>
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
                        <div className="flex-1 flex flex-row gap-4 items-center">
                            <NavLink to="/" className="w-35">
                                <img src="https://media.discordapp.net/attachments/1019570480782524478/1387922389081526373/synergyalgo-logo.png?ex=685fc3b3&is=685e7233&hm=a533dbac40a5cf017d77bbf0fbfce0a8f8c65c29dcb23f9f6bfdc5f7c834c179&=&format=webp&quality=lossless" alt="Logo" className='h-full w-full object-contain' />
                            </NavLink>
                            <div className="flex items-center gap-2">
                                <p className="text-xs text-gray-500">+1 (415) 655-1002</p>
                                <span className='text-xs text-gray-500'>|</span>
                                <p className="text-xs text-gray-500">synergyalgo@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-row justify-between items-center gap-4">
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
    );
};