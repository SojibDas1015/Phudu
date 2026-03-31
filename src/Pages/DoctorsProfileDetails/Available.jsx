import React from 'react';

const Available = ({available}) => {
    return (
        <div>
            <p className='text-[#FFA000] border-1 border-[#FFA00020] bg-[#FFA00010] px-3 py2 rounded-full'>{available}</p> 
        </div>
    );
};

export default Available;