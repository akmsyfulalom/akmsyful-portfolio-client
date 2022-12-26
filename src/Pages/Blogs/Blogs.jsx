import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';


const Blogs = () => {

    const { data: allBlogs = [], isLoading } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBlogs')
            const data = await res.json()
            return data;

        }
    })

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className='text-white'>
            <h1 className='py-10  text-center md:text-7xl text-4xl text-white '>My Blogs</h1>
            <div className='text-center'>
                <input type="text" placeholder=" Search Posts" className="input input-bordered w-full max-w-xs bg-neutral " />
            </div>
            <div >
                {
                    allBlogs?.map(blog => <div key={blog?._id} className="card md:card-side md:mx-10 mx-5 my-5   shadow-xl">
                        <figure className='md:w-1/2'><img src={blog?.img} alt="Movie" className='rounded-lg ' /></figure>
                        <div className="card-body md:w-1/2">
                            <h2 className="card-title">{blog?.title}</h2>
                            <div className='flex items-center'>
                                <div className="avatar">
                                    <div className=" mr-1 w-4 rounded-full  ">
                                        <FaUserCheck></FaUserCheck>
                                    </div>
                                </div>
                                <p className='text-xs'>AKM SYFUL ALOM</p>
                            </div>
                            <p className='text-xs'>Post date: 23-12-2022</p>
                            <p>{blog?.decs.slice(0, 300) + "..."}</p>
                            <div className="card-actions justify-start">
                                <Link to={`/blog/${blog?._id}`} className="btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold">Read More</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Blogs;