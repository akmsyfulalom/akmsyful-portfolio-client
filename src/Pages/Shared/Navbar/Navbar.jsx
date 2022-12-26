import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaAlignJustify, FaInfoCircle, FaUserPlus, FaNewspaper } from "react-icons/fa";

const Navbar = () => {


    const menuItems = <>

        <li> <Link to='/'><FaHome className='-mr-2'></FaHome> Home</Link> </li>
        <li> <Link to='/projects'><FaAlignJustify className='-mr-2'></FaAlignJustify> Projects</Link> </li>
        <li> <Link to='/blogs'><FaNewspaper className='-mr-2'></FaNewspaper> Blogs</Link> </li>
        <li> <Link to='/about'><FaInfoCircle className='-mr-2'></FaInfoCircle> About</Link> </li>
        <li> <Link to='/contact'><FaUserPlus className='-mr-2'></FaUserPlus> Contact</Link> </li>


    </>


    return (
        <div className='' >
            <div className='navbar bg-neutral text-white px-5   fixed  z-10'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary font-bold rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost hover:bg-inherit normal-case text-xl font-bold">AKM SYFUL ALOM</Link>
                </div>
                <div className="navbar-center  hidden  lg:flex navbar-end ">
                    <ul className="menu  menu-horizontal px-1 font-bold">
                        {menuItems}
                    </ul>
                </div>

            </div>
            <h1 className='h-20'></h1>
        </div>
    );
};

export default Navbar;