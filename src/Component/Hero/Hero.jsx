import React from 'react';
import bannerImage from '../../assets/banner-img-1.png'
const Hero = () => {
    return (
        <div className='max-w-[1281px] mx-auto px-10 py-6'>
            <div className='space-y-4 border-2 border-white rounded-3xl py-10 bg-linear-to-t from-white to-white/0'>
                <h1 className='font-extrabold text-5xl text-center max-w-[917px] mx-auto'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='text-base font-medium max-w-[1009px] mx-auto text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className="join flex gap-4 justify-center">
                    <div>
                        <label className="input validator join-item rounded-full pr-40">
                            <input type="email" placeholder="Search any doctor..." required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn text-white join-item rounded-full bg-[#176AE5]">Search Now</button>
                </div>
                <div className='flex items-center justify-center gap-6'>
                    <img width={478} src={bannerImage} alt="" />
                    <img width={478} src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;