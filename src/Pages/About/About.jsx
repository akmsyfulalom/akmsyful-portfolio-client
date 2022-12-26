import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MyPhoto from '../../assets/MyPhoto.JPG';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const About = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);
    return (
        <div className='md:py-10 py-5 md:mx-10 mx-5 text-white'>

            <h1 className='md:text-7xl font-mono text-5xl text-center  '>About me</h1>
            <div className='grid md:grid-cols-2 items-center'>
                <div className='col-span-1 '>
                    <>
                        {
                            loading ? <LoadingSpinner /> : <img className='w-1/2 mx-auto rounded-2xl shadow-2xl my-5' src={MyPhoto} alt="" />
                        }
                    </>
                </div>
                <div>
                    <h1 className='font-bold text-4xl pb-5'>AKM SYFUL ALOM</h1>
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
                    <p className='font-bold mt-5'>
                        I am passionate about Web Development. I am strongly committed to being a solid software engineer and developing efficient software systems. I am interested in building excellent software that improves the lives of those around me. I am currently working on MERN-Stack web application development
                    </p>
                    <div className='flex justify-start mt-5'>
                        <a href='https://www.linkedin.com/in/akmsyful/' className=' mr-2 btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold'><FaLinkedin className='mr-1'></FaLinkedin> Linkedin</a>
                        <a href='https://github.com/akmsyfulalom' className='btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold'><FaGithub className='mr-1'></FaGithub> GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;