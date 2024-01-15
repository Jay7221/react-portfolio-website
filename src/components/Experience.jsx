import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import python from '../assets/python.png';
import cpp from '../assets/cpp.png';
import pytorch from '../assets/pytorch.png';
import opencv from '../assets/opencv.png';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: pytorch,
            title: 'PyTorch',
            style: 'shadow-red-500'
        },
        {
            id: 3,
            src: opencv,
            title: 'OpenCV',
            style: 'shadow-green-500'
        },
    ];
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 
            flex flex-col justify-center w-full 
            h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style }) => (

                            <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience