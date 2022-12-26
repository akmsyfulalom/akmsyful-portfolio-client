import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Carousel from 'react-grid-carousel';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import './service.css';

const MyServices = () => {

    const { data: services = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <LoadingSpinner />
    }


    return (
        <div className='md:mx-10 mx-5 text-white'>
            <div>
                <h1 className='text-center md:text-5xl text-2xl text-white my-10 font-bold'>My Service</h1>
            </div>
            <Carousel cols={3} rows={1} gap={10} loop>
                {
                    services?.map(service => <Carousel.Item key={service?._id}>
                        <div className='card card-compact  text-center bg-neutral card-effect   md:h-96 h-80 '>
                            <figure className='flex justify-center'>
                                <img width="100%" src={service?.img} className='w-1/2 ' alt='a' />
                            </figure>
                            <div className='card-body'>
                                <h1 className='md:text-2xl text-xl font-bold'>{service?.name}</h1>

                                <p className='md:font-semibold'>{service?.decs}</p>
                            </div>
                        </div>
                    </Carousel.Item>)
                }


            </Carousel>
        </div>
    );
};

export default MyServices;