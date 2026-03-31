import React, { useEffect } from 'react';
import { BiMessageSquareError } from 'react-icons/bi';
import { getDataFormLocalStorage } from '../../Utelities/Utelities';
import { NavLink, useLoaderData } from 'react-router';
import Book from './Book';
import { toast, ToastContainer } from 'react-toastify';

const MyBookings = () => {
    const doctorsData = useLoaderData()
    const getDataFormLocal = getDataFormLocalStorage()
    const myBooksData = doctorsData.filter(doctor => getDataFormLocal.includes(doctor.id))
    useEffect(()=>{
        toast.success("Wow so easy!")
    },[])
    return (
        <div className='max-w-[1281px] mx-auto px-2 md:px-10'>
            <ToastContainer />
            {
                getDataFormLocal.length > 0 ?

                    <div>
                        <div className='space-y-4 py-14'>
                            <h1 className='font-extrabold text-2xl md:text-4xl text-center max-w-[917px] mx-auto'>Doctor’s Profile Details</h1>
                            <p className='text-xs md:text-base font-medium max-w-[1009px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
                        </div>
                        {
                            myBooksData.map((book,index) => <Book key={index} book={book}></Book>)
                        }
                    </div>


                    :
                    <div className='h-[50vh] flex flex-col justify-center space-y-4'>
                        <h1 className='font-extrabold text-2xl md:text-4xl text-center max-w-[917px] mx-auto'>You Have Not Booked any Appointment Yet</h1>
                        <p className='text-xs md:text-base font-semibold max-w-[1009px] mx-auto text-center text-[#14141450]'>out platform connect with you verified experience doctors across various specialties - all at your convenience</p>
                        <div className='py-2 px-4 bg-[#176AE5] rounded-full text-white text-lg font-bold  hover:bg-[#0055d4] cursor-pointer flex justify-center w-3/12 mx-auto'>
                            <NavLink to='/'><button >Book Appointment Now</button></NavLink>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyBookings;