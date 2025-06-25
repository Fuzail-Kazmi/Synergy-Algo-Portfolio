import React from 'react'
import { useState } from 'react';

export const ServicePg = () => {
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
            
        </>
    )
}
