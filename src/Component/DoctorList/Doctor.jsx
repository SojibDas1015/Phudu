import React from 'react';
import relogo from '../../assets/registration.png'
const Doctor = ({ doctor }) => {
    const { image, availability, experience, name, designation, registrationNumber } = doctor
    return (
        <div className='space-y-3 p-4 bg-white rounded-3xl'>
            <img className='w-full h-80 object-cover object-top rounded-3xl' src={image} alt="" />
            <div className='flex items-center gap-2 text-sm'>
                <p className='text-[#09982F] border-1 border-[#09982f20] px-4 py-1 rounded-full bg-[#09982f10]'>{availability.length > 0 && "Available"}</p>
                <p className='text-[#176AE5] border-1 border-[#176AE520] px-4 py-1 rounded-full bg-[#176AE510]'>{experience} Experience</p>
            </div>
            <h3 className='text-2xl font-extrabold'>{name}</h3>
            <p className='text-lg font-medium text-[#0F0F0F60]'>{designation}</p>
            <div className='border-1 border-dashed border-[#0F0F0F60] border-d'></div>
            <div className='flex items-center gap-3'>
                <img src={relogo} alt="" />
                <p>{registrationNumber}</p>
            </div>
            <button className='text-lg font-bold text-[#176AE5] border-1 border-[#176AE5] rounded-full py-2 w-full'>View Details</button>
        </div>
    );
};

export default Doctor;