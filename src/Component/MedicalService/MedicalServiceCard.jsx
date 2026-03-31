import React from 'react';
import CountUp from 'react-countup';

const MedicalServiceCard = ({ medical }) => {
    const RealCountUP = CountUp.default
    return (
        <div className='w-full space-y-4 bg-white rounded-3xl  p-7'>
            <img width={60} src={medical.image_url} alt="" />
            <h3 className="text-5xl font-extrabold">
                <RealCountUP
                    start={medical.start_count}
                    end={medical.end_count}
                    duration={3}
                    suffix="+"
                    enableScrollSpy={true}
                    scrollSpyOnce={true}>
                    {({ countUpRef }) => <span ref={countUpRef}></span>}
                </RealCountUP>
            </h3>
            <h3 className='text-xl font-semibold text-[#0F0F0F60]'>{medical.label}</h3>
        </div>
    );
};

export default MedicalServiceCard;