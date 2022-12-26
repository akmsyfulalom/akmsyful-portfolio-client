import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaComment, FaEye, FaHandPointRight, FaUserCheck } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import profile from '../../assets/internShala.jpg';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const ViewBlog = () => {
    const blogDetail = useLoaderData()
    console.log(blogDetail._id);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [commentDate, setCommentDate] = useState(new Date());

    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    // API for posting comments

    const handleAddComment = (event) => {
        event.preventDefault()
        const form = event.target;
        const postId = form.post_id.value;
        const userName = form.user_name.value;
        const userComment = form.user_comment.value;
        const commentDate = form.comment_date.value;
        console.log(userComment, userName, postId, commentDate);

        const addComment = {
            id: postId,
            name: userName,
            comment: userComment,
            date: commentDate,
            time: new Date()
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addComment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('your comment has been added');
                    event.target.reset();
                    refetch()
                }
            })
    };


    // API for fetching comments

    const { data: comments = [], refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments?id=${blogDetail._id}`)
            const data = await res.json()
            console.log(data)
            return data;
        }
    })

    return (
        <div>
            {
                loading ? <LoadingSpinner />
                    :
                    <div className='grid lg:grid-cols-5 grid-cols-1 gap-5 md:mx-10 mx-5 my-10  text-white '>


                        <div className="col-span-3">
                            <div className="card card-compact  ">
                                <figure><img src={blogDetail?.img} alt="post img" /></figure>
                                <div className="">
                                    <h2 className="card-title">{blogDetail?.title}</h2>
                                    <p>{blogDetail?.decs}</p>

                                </div>
                            </div>
                            <div className='flex justify-center my-2 '>
                                <Link to='/blogs' className="btn btn-sm border-secondary  bg-gradient-to-r from-neutral to-primary text-white font-bold">Back to Blogs</Link>
                            </div>
                        </div>
                        <div className='card card-compact md:p-5 p-2   card-body col-span-2'>

                            <div className='flex items-center '>
                                <div className="avatar mr-2">
                                    <div className="md:w-16 w-8 rounded-full">
                                        <img src={profile} alt='profile' />
                                    </div>
                                </div>
                                <p className='text-xl font-bold -mt-4'>AKM SYFUL ALOM</p>
                                <button onClick={copy}>{!copied ? "Copy Link" : "Copied!"}</button>

                            </div>
                            <div className='md:pl-16 pl-8'>
                                <p className='pl-2 md:-mt-10 -mt-5'>Post date: 23-12-2022</p>
                            </div>
                            <div>
                                <h1 className='mt-2 mb-5 font-semibold text-xl'>{blogDetail?.title}</h1>
                            </div>
                            <div className='flex justify-between'>
                                <div><p className='text-center'>1</p>
                                    <button className='flex items-center '> <FaHandPointRight className='mr-2 text-xl'></FaHandPointRight><p>Like</p></button>
                                </div>
                                <div><p className='text-center'>{comments.length}</p>
                                    <button className='flex items-center '> <FaComment className='mr-2 text-xl'></FaComment><p>Comment</p></button>
                                </div>
                                <div><p className='text-center'>1</p>
                                    <button className='flex items-center '> <FaEye className='mr-2 text-xl'></FaEye><p>Views</p></button>
                                </div>
                            </div>
                            <div>
                                <p>Write a Comment</p>
                                <form onSubmit={handleAddComment}>
                                    <input name='comment_date' type="text" hidden defaultValue={format(commentDate, 'P')} />
                                    <input name='post_id' defaultValue={blogDetail?._id} hidden type="text" />
                                    <input name='user_name' type="text" placeholder="Write your name" required className="input input-bordered input-sm mt-2 w-full  bg-neutral" />
                                    <textarea name='user_comment' className="textarea textarea-bordered w-full mt-2 bg-neutral" placeholder="Write your comment"></textarea>
                                    <div className='flex justify-center'>
                                        <button type='submit' className=' btn btn-sm border-secondary  bg-gradient-to-r from-neutral to-primary text-white font-bold'>Submit your comment</button>
                                    </div>
                                </form>

                            </div>
                            <div>
                                <p className='font-semibold'>Comments</p>
                            </div>
                            <div>
                                {
                                    comments?.map(comment => <div key={comment._id} className='mb-5' >
                                        <div className='flex items-center'>
                                            <div className="avatar">
                                                <div className=" mr-1 w-4 rounded-full  ">
                                                    <FaUserCheck></FaUserCheck>
                                                </div>
                                            </div>
                                            <p className='text-sm'>{comment?.name}</p>

                                        </div>

                                        <p>{comment?.comment}</p>
                                        <p className='text-xs'>Commented: {comment?.date}</p>
                                        <hr className='my-2' />
                                    </div>)
                                }
                            </div>

                        </div>


                    </div>
            }
        </div>
    );
};

export default ViewBlog;