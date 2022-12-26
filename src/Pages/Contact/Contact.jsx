import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ThankYou from './ThankYou/ThankYou';
import EmailSendSpinner from './EmailSendSpinner/EmailSendSpinner';
import { FaFacebookMessenger, FaWhatsappSquare, FaSkype, FaTelegram, FaLocationArrow } from "react-icons/fa";



const Contact = () => {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(true)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hmmh7ag', 'template_lrm00lb', form.current, 'i9CVuF3eg8PsDrGjQ')
            .then((result) => {
                console.log(result.text);
                console.log('sendEmail');
                e.target.reset()
                setSuccess(true)
                setLoading(false)


            }, (error) => {
                console.log(error.text);
            });
    };
    return (

        <div className=' mb-5  md:mx-10 mx-5 text-white' >
            <h1 className='md:text-7xl font-mono font-bold text-5xl text-center py-10 '>Contact </h1>
            <div className='hero-content grid lg:grid-cols-2 md:grid-cols-2 gap-7 items-center  '>
                <div className='col-span-1 px-5'>
                    <h1 className='text-2xl font-bold mb-2 text-white'>Quick Contact</h1>
                    <div className='flex my-5'>
                        <a href="https://www.messenger.com/t/100018838652466" target="_blank" rel="noopener noreferrer"> <FaFacebookMessenger className='md:text-4xl text-3xl mr-2 ' style={{ color: "#0A82ED" }}></FaFacebookMessenger></a>
                        <a href="https://wa.me/+8801751760872" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare className='md:text-4xl text-3xl mr-2 ' style={{ color: "#0EBF42" }}></FaWhatsappSquare></a>
                        <a href="https://join.skype.com/invite/xy2wK1FSbd1d" target="_blank" rel="noopener noreferrer"><FaSkype className='md:text-4xl text-3xl mr-2 ' style={{ color: "#93D3F4" }}></FaSkype></a>
                        <a href="https://t.me/akmsyful" target="_blank" rel="noopener noreferrer"><FaTelegram className='md:text-4xl text-3xl  ' style={{ color: "#93D3F4" }}></FaTelegram></a>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-2 text-white'>Email</h1>
                        <a className='text-white underline ' href='mailto:akmsyfulbd12@gmail.com'>akmsyfulbd12@gmail.com</a>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-2 text-white'>Call</h1>
                        <a className='text-white underline ' href='tel:+8801751760872'>+8801751-76 08 72</a>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-2 text-white'>My Address</h1>
                        <a href='https://goo.gl/maps/voH7sDkEhHeHjyqH6' target="_blank" rel="noopener noreferrer" className='text-white underline'>Shaplabag, Tilagor, Sylhet 3100, Bangladesh</a>
                    </div>

                </div>

                {
                    success ?
                        loading ? <EmailSendSpinner /> : <ThankYou />
                        :
                        <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full rounded-none  ">
                            <div className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Name</span>
                                    </label>
                                    <input type="text" name="user_name" required placeholder="Type your name" className="input input-bordered bg-primary  text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Email</span>
                                    </label>
                                    <input type="email" name="user_email" required placeholder="Type your email" className="input input-bordered bg-primary  text-white" />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Message</span>
                                    </label>
                                    <textarea name="message" required className="textarea textarea-bordered  bg-primary text-white" placeholder="Write your message"></textarea>
                                </div>

                                <div className="form-control mt-6">

                                    <button className="btn btn-success  bg-gradient-to-r from-neutral to-primary text-white font-bold text-xl "><FaLocationArrow className='mr-1'></FaLocationArrow><input type="submit" value="Send" /></button>
                                </div>
                            </div>
                        </form>
                }



            </div >
        </div>
    );
};

export default Contact;