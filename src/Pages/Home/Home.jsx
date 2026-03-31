import React from 'react';
import Hero from '../../Component/Hero/Hero';
import DoctorList from '../../Component/DoctorList/DoctorList';
import MedicalService from '../../Component/MedicalService/MedicalService';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DoctorList></DoctorList>
            <MedicalService></MedicalService>
        </div>
    );
};

export default Home;