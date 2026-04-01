import React from 'react';
import { useLoaderData } from 'react-router';
import SingleBlogs from './SingleBlogs';

const Blogs = () => {
    const blogsData = useLoaderData()
    return (
        <div className='max-w-[1281px] mx-auto px-2 md:px-10'>
            <div className='space-y-4 py-14 bg-white rounded-3xl'>
                <h1 className='font-extrabold text-2xl md:text-5xl text-center max-w-[917px] mx-auto'>Blogs</h1>
                <p className='text-xs md:text-base font-medium max-w-[1009px] mx-auto text-center px-4 md:px-0 text-[#0F0F0F60]'>Let's Explore Some Basic Concepts that Will Make You a Good Developer</p>
            </div>
            <div className='flex flex-col gap-4 py-10'>
                {
                    blogsData.map(blog => <SingleBlogs key={blog.id} blog={blog}></SingleBlogs>)
                }
            </div>
        </div>
    );
};

export default Blogs;