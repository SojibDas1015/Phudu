import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const DoctorList = () => {
    const [doctorData, setDoctorData] = useState([])
    useEffect(()=>{
        fetch('doctors.json').then(res => res.json()).then(data => setDoctorData(data));
    },[])
    return (
        <div className='max-w-[1281px] mx-auto px-2 md:px-10 py-20'>
            <div className='space-y-4'>
                <h1 className='font-extrabold text-2xl md:text-5xl text-center max-w-[917px] mx-auto'>Our Best Doctors</h1>
                <p className='text-xs md:text-base font-medium max-w-[1009px] mx-auto text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8'>
                {
                    doctorData.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default DoctorList;