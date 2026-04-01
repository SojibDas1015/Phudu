import { BiMessageSquareError } from 'react-icons/bi';
import { getDataFormLocalStorage, removeDataFormLocalStorage } from '../../Utelities/Utelities';
import Book from './Book';
import { NavLink, useLoaderData, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const MyBookings = () => {
    const doctorsData = useLoaderData()
    const getDataFormLocal = getDataFormLocalStorage()
    const myBooksData = doctorsData.filter(doctor => getDataFormLocal.includes(doctor.id))
    const [showAppoitment, setShowAppoitment] = useState([])
    useEffect(() => {
        setShowAppoitment(myBooksData)
    }, [doctorsData])
    const handleRemoveData = (id) => {
        removeDataFormLocalStorage(id)
        const appointmentBook = myBooksData.filter(book => book.id != id)
        setShowAppoitment(appointmentBook);
    }
    const bookBtnCliked = useLocation()
    const showTost = bookBtnCliked.state
    const doctorName = bookBtnCliked?.state?.doctor
    console.log(doctorName)
    useEffect(() => {
        if (showTost) {
            doctorName && toast.success(`Appointment Scheduled for ${doctorName}`)
            window.history.replaceState({}, document.title)
        }
    }, [])
    return (
        <div className='max-w-[1281px] mx-auto px-2 md:px-10'>
            <ToastContainer/>
            {
                getDataFormLocal.length > 0 ?

                    <div>
                        <div className='space-y-4 py-14'>
                            <h1 className='font-extrabold text-2xl md:text-4xl text-center max-w-[917px] mx-auto'>Doctor’s Profile Details</h1>
                            <p className='text-xs md:text-base font-medium max-w-[1009px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
                        </div>
                        {
                            showAppoitment.map((book, index) => <Book key={index} book={book} handleRemoveData={handleRemoveData} ></Book>)
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