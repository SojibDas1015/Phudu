import React from 'react';

const Book = ({book}) => {
    const {name,speciality,designation,fee} = book
    return (
        <div>
            <div className='space-y-4 p-8 bg-white rounded-3xl mb-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='font-bold'>{name}</h3>
                        <p className='text-[#0F0F0F60] font-medium'>{speciality} {designation}</p>
                    </div>
                    <div>
                        <p className='text-[#0F0F0F60] font-medium'>Appointment Fee : {fee} Taka + Vat</p>
                    </div>
                </div>
                <div className='border-b-1 border-dashed'></div>
                <button className='py-2 border-1 border-[#FF0000] rounded-full text-[#FF0000] text-lg font-bold w-full hover:bg-[#FF0000] hover:text-white cursor-pointer'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default Book;