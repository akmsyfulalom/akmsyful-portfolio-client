import { useQuery } from '@tanstack/react-query';
import { FaGithub, FaLink, FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HomeProjects = () => {

    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/projects')
            const data = await res.json()
            return data;
        }

    })
    return (
        <div className='md:mx-10 mx-5'>
            <h1 className='text-center md:text-5xl text-2xl text-white my-10 font-bold  '>My Projects</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7'>
                {
                    projects?.map(project => <div key={project._id} className="card card-compact  text-white  shadow-2xl">
                        <figure><img src={project?.img} alt="Project images" className='hover:cursor-pointer' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project?.title}</h2>
                            <h4 className='font-semibold'>Tech-Stack</h4>
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
            <div className='flex justify-center'>
                <Link to='/projects' className="  my-5 btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold"><FaAlignJustify className='mr-1'></FaAlignJustify> All Projects</Link>
            </div>
        </div>
    );
};

export default HomeProjects;