import React from 'react'
import ideaManagement from '../assets/portfolio/ideaManagementPlatform.png';
import mernMemories from '../assets/portfolio/mernMemories.png';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: ideaManagement,
            demo: 'https://idea-management-platform-main.onrender.com/',
            code: 'https://github.com/KattaGang/BridgeStoneProjectHostRepo',
        },
        {
            id: 2,
            src: mernMemories,
            demo: 'https://mern-memories-one.vercel.app/',
            code: 'https://github.com/Jay7221/mern-memories',
        },
    ];
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white
        md:h-screen
        '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, code }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex justify-between items-center'>
                                    <button className='w-1/2 px-6 m-4 duration-200 hover:scale-110'>
                                        <a href={demo} target='_blank'>Demo</a>
                                    </button>
                                    <button className='w-1/2 px-6 m-4 duration-200 hover:scale-110'>
                                        <a href={code} target='_blank'>Code</a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio