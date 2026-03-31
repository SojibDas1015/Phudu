import React, { useEffect, useState } from 'react';
import MedicalServiceCard from './MedicalServiceCard';

const MedicalService = () => {
    const [medicalData, setMedicalData] = useState([]);
    useEffect(()=> {
        fetch('medicalservice.json').then(res => res.json()).then(data => setMedicalData(data))
    },[])
    return (
        <div className='max-w-[1281px] mx-auto px-2 md:px-10 py-20'>
            <div className='space-y-4'>
                <h1 className='font-extrabold text-2xl md:text-5xl text-center max-w-[917px] mx-auto'>We Provide Best Medical Services</h1>
                <p className='text-xs md:text-base font-medium max-w-[1009px] mx-auto text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8'>
                {
                    medicalData.map(medical => <MedicalServiceCard key={medical.id} medical={medical}></MedicalServiceCard>)
                }
            </div>
        </div>
    );
};

export default MedicalService;