import React from 'react';
import successSend from '../../../assets/successSend.jpg';

const ThankYou = () => {
    return (
        <div className='text-center'>
            <h1 className='md:text-5xl font-mono font-bold text-4xl'>Thank You</h1>
            <p className='text-2xl text-success my-3'>Successfully send your message</p>
            <img className='w-1/2 mx-auto rounded-2xl' src={successSend} alt="successSend" />

        </div>
    );
};

export default ThankYou;