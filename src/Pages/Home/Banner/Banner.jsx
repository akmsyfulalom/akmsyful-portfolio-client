import React from 'react';
import bannerImg from '../../../assets/Development-pana.png';
import resume from '../../../assets/akmsyful.resume.pdf';
import myCV from '../../../assets/AKM-SYFUL-CV.pdf';
import { TypeAnimation } from 'react-type-animation';
import { FaCloudDownloadAlt } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 gap-5 items-center md:mx-10 mx-5 '>
            <div className='col-span-1'>
                <h1 className="md:text-5xl text-3xl font-bold text-white mt-16">
                    Welcome To My Personal Portfolio
                </h1>
                <h2 className='flex '> <span className='font-bold md:text-4xl text-2xl text-white  mr-2'>I'm</span>
                    <TypeAnimation
                        sequence={[
                            'Web App Developer', // Types 'One'
                            1000, // Waits 1s
                            'JavaScript Developer', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'MERN-Stack Developer', // Types 'Three' without deleting 'Two'
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        className='md:text-4xl text-2xl font-bold '
                        style={{ color: '#00FFAB' }}
                    />
                </h2>
                <p className='text-xl font-medium my-5 text-white'>
                    The Purpose of me is to help aspiring and establish to take their projects in the next level.
                </p>

                <div className=''>
                    <a href={resume} className='btn btn-success mr-2 my-5 bg-gradient-to-r from-neutral to-primary text-white font-bold' download><FaCloudDownloadAlt className='text-2xl pr-1'></FaCloudDownloadAlt>  Download Resume</a>
                    <a href={myCV} className='btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold' download><FaCloudDownloadAlt className='text-2xl pr-1'></FaCloudDownloadAlt> Download CV</a>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;