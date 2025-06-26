import React from 'react'
import { useState } from 'react';

export const ServicePg = () => {
    return (
        <>
            <OurTechnologySec/>
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
                name: 'TypeScript',
                imgURL: 'https://media.canva.com/v2/image-resize/format:PNG/height:512/quality:100/uri:ifs%3A%2F%2FM%2F340e299d-9214-4979-96d4-851b7698c047/watermark:F/width:512?csig=AAAAAAAAAAAAAAAAAAAAAEaYzGoWZQJwv9emVrghINOd5HdULLH1KWvUgG3qpLeT&exp=1750949403&osig=AAAAAAAAAAAAAAAAAAAAAPJO-khNkkfbZyPBHoxw5vEbZnF530bcd7j_lgd7fjkF&signer=media-rpc&x-canva-quality=thumbnail_large'
            },
            {
                name: 'Next.js',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
            },
            {
                name: 'JavaScript',
                imgURL: '	https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
            },
            {
                name: 'HTML',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/html-1.svg'
            },
            {
                name: 'CSS',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
            },

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
                imgURL: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png'
            },
            {
                name: 'PostgreSQL',
                imgURL: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg'
            }
        ],
        'CMS': [
            {
                name: 'Magento',
                imgURL: 'https://icon2.cleanpng.com/20180526/qk/kisspng-web-development-magento-e-commerce-web-design-wooc-5b0a11d11122f0.8566809515273865770702.jpg'
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