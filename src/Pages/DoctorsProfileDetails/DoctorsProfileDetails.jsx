import React from 'react';
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router';
import relogo from '../../assets/registration.png'
import Available from './Available';
import { BiMessageSquareError } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import { getDataFormLocalStorage, setDataFormLocalStorage } from '../../Utelities/Utelities';
const DoctorsProfileDetails = () => {
    const doctorsData = useLoaderData()
    const params = useParams()
    const paramsId = parseInt(params.id);
    const doctorProfile = Array.isArray(doctorsData) ? doctorsData.find(doctor => doctor.id === paramsId) : null
    const { id, image, name, speciality, designation, workplace, registrationNumber, availability, fee } = doctorProfile;
    const handleBookNow = (id) => {
        const getmain = getDataFormLocalStorage()
        setDataFormLocalStorage(id)
        
    }
    return (
        <div className='max-w-[1281px] mx-auto px-2 md:px-10 '>
            <div className='space-y-4 py-14 bg-white rounded-3xl'>
                <h1 className='font-extrabold text-2xl md:text-5xl text-center max-w-[917px] mx-auto'>Doctor’s Profile Details</h1>
                <p className='text-xs md:text-base font-medium max-w-[1009px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='bg-white p-14 my-10 rounded-3xl flex items-center gap-6'>
                <div>
                    <img className='w-[335px] h-[383px] rounded-3xl object-cover object-top border-1' src={image} alt="" />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-extrabold'>{name}</h1>
                    <div className='text-[#14141460] font-normal '>
                        <p>{speciality}</p>
                        <p>{designation}</p>
                    </div>
                    <p className='font-bold'> <span className='text-[#14141460] font-normal pb-2'>Working at</span> <br />
                        {workplace}
                    </p>
                    <div className='flex items-center gap-3 border-y-1 border-dashed py-4'>
                        <img src={relogo} alt="" />
                        <p>{registrationNumber}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Availability</p>
                        {
                            availability.map((available, index) => <Available key={index} available={available}></Available>)
                        }
                    </div>
                    <p className='font-bold'>Consultation Fee: <span className='text-[#176AE5]'>Taka: {fee} <span className='text-[#14141450] font-semibold px-1'>(incl. Vat)</span> Per consultation</span></p>
                </div>
            </div>
            <div className='space-y-4 p-8 bg-white rounded-3xl mb-10'>
                <h1 className='font-extrabold text-2xl md:text-2xl text-center max-w-[917px] mx-auto'>Book an Appointment</h1>
                <div className='flex justify-between border-y-1 border-dashed py-4'>
                    <p>Availability</p>
                    <p className='text-[#09982F] border-1 border-[#09982F20] bg-[#09982F10] px-3 py2 rounded-full'>Doctor Available Today</p>
                </div>
                <p className='flex items-center gap-1 text-[#FFA000] border-1 border-[#FFA00020] bg-[#FFA00010] px-3 py2 rounded-full'><BiMessageSquareError />
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                <NavLink to='/mybookings'>
                    <button onClick={() => handleBookNow(id)} className='py-2 bg-[#176AE5] rounded-full text-white text-lg font-bold w-full hover:bg-[#0055d4] cursor-pointer'>Book Appointment Now</button>
                </NavLink>
            </div>
        </div>
    );
};

export default DoctorsProfileDetails;