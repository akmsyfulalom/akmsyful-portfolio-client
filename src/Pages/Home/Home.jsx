import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeBlogs from '../HomeBlogs/HomeBlogs';

import Banner from './Banner/Banner';
import HomeProjects from './HomeProjects/HomeProjects';
import MyServices from './MyServices/MyServices';


const Home = () => {
    return (
        <div >
            <Banner />
            <HomeProjects />
            <MyServices />
            <About />
            <HomeBlogs />
            <Contact />


        </div>
    );
};

export default Home;