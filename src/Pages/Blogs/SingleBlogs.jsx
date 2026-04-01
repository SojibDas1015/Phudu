import React from 'react';

const SingleBlogs = ({ blog }) => {
    const { question, answer } = blog
    return (
        <div className='bg-white p-6 rounded-2xl'>
            <h1 className='font-extrabold text-xl'>{question}</h1>
            <p className='border-y-1 border-dashed py-2 text-[#176AE5]'>Answer: <br /> <span className='text-black'>{answer}</span></p>
        </div>
    );
};

export default SingleBlogs;