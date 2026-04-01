import React, { useEffect, useState } from 'react';
import Hero from '../../Component/Hero/Hero';
import DoctorList from '../../Component/DoctorList/DoctorList';
import MedicalService from '../../Component/MedicalService/MedicalService';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [doctorData, setDoctorData] = useState([])
    useEffect(() => {
        fetch('doctors.json').then(res => res.json()).then(data => {
            setDoctorData(data)
            setLoading(false)
        });
    }, [])
    return (
        <div>
            {
                loading && <div className='flex justify-center h-screen items-center'><span className="loading loading-bars loading-xl"></span></div>
            }
            <Hero></Hero>
            <DoctorList doctorData={doctorData}></DoctorList>
            <MedicalService></MedicalService>
        </div>
    );
};

export default Home;