import { useQuery } from '@tanstack/react-query';
import React from 'react';


const Blogs = () => {

    const { data: allBlogs = [] } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBlogs')
            const data = await res.json()
            return data;

        }
    })

    return (
        <div className='text-white'>
            <h1 className='pb-10  text-center md:text-7xl text-4xl text-white '>My Blogs</h1>
            <div className='text-center'>
                <input type="text" placeholder=" Search Posts" className="input input-bordered w-full max-w-xs " />
            </div>
            <div >
                {
                    allBlogs?.map(blog => <div key={blog?._id} className="card md:card-side md:mx-10 mx-5 my-5   shadow-xl">
                        <figure className='md:w-1/2'><img src={blog?.img} alt="Movie" className='rounded-lg ' /></figure>
                        <div className="card-body md:w-1/2">
                            <h2 className="card-title">{blog?.title}</h2>
                            <p>{blog?.decs.slice(0, 300) + "...read more"}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Blogs;