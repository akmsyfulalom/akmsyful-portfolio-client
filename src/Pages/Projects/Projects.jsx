import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {

    const { data: allProjects = [] } = useQuery({
        queryKey: ['allProjects'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allProjects')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='md:mx-10 mx-5'>
            <h1 className='pb-10  text-center md:text-7xl text-4xl text-white '>My Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 my-16'>
                {
                    allProjects?.map(project => <div key={project._id} className="card card-compact  text-white  shadow-2xl">
                        <figure><img src={project?.img} alt="Project images" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project?.title}</h2>
                            <div className='flex '>
                                {
                                    project?.tech?.map((t, i) => <div key={i} ><p className="p-1 rounded-lg bg-neutral text-xs mr-1 text-white" >
                                        {t}
                                    </p></div>)
                                }
                            </div>
                            <p>{project?.decs}</p>
                            <div className="card-actions flex justify-around ">
                                <a href={project?.server} target="_blank" rel="noopener noreferrer" className="btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold"><FaGithub className='mr-1'></FaGithub>  server</a>
                                <a href={project?.client} target="_blank" rel="noopener noreferrer" className="btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold"><FaGithub className='mr-1'></FaGithub> client</a>
                                <a href={project?.live} target="_blank" rel="noopener noreferrer" className="btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold"><FaLink className='mr-1'></FaLink>  Live Visit</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;