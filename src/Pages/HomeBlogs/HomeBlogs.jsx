import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const HomeBlogs = () => {

    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className='md:mx-10 mx-5'>
            <h1 className='text-center md:text-5xl text-2xl text-white my-10 font-bold '> Blogs</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7'>
                {
                    blogs?.map(blog => <div key={blog._id} className="card card-compact  text-white  shadow-2xl">
                        <figure><img src={blog?.img} alt="Project images" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog?.title}</h2>

                            <p>{blog?.decs}</p>
                            <div className="card-actions flex justify-around ">
                                <Link to={`/blog/${blog?._id}`} className="btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold">Read more</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/blogs' className="  my-5 btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold"><FaAlignJustify className='mr-1'></FaAlignJustify> All Blogs</Link>
            </div>
        </div>
    );
};

export default HomeBlogs;