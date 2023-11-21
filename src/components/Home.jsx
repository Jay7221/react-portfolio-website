import React from 'react'
import HeroImage from "../assets/jay.jpeg";
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl md:text-7xl text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am a 2025 graduate, with 2 years experience building and designing software.
                        I love to work on web and AI / ML projects.
                    </p>
                    <div>
                        <button className='group md:text-xl  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500'>
                            <Link to='portfolio' smooth duration={500}>Portfolio</Link>
                            <span className='group-hover:rotate-90 duration-300 ml-2'>
                                <HiArrowRight size={20} />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home