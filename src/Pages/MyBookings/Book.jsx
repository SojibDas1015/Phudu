import { toast, ToastContainer } from 'react-toastify';

const Book = ({ book ,handleRemoveData }) => {
    const { id, name, speciality, designation, fee } = book
    const handleRemoveMultiple = (id) =>{
        name && toast.error(`Appointment Scheduled Remove ${name}`)
        handleRemoveData(id)
    }
    return (
        <div>
            <div className='space-y-4 p-4 md:p-8 bg-white rounded-3xl mb-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-sm md:text-lg font-bold'>{name}</h3>
                        <p className='text-[#0F0F0F60] font-medium text-sm  md:text-lg'>{speciality} {designation}</p>
                    </div>
                    <div>
                        <p className='text-[#0F0F0F60] font-medium text-sm md:text-lg'>Appointment Fee : {fee} Taka + Vat</p>
                    </div>
                </div>
                <div className='border-b-1 border-dashed'></div>
                <button onClick={()=>handleRemoveMultiple(id)} className='py-2 border-1 border-[#FF0000] rounded-full text-[#FF0000] text-lg font-bold w-full hover:bg-[#FF0000] hover:text-white cursor-pointer'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default Book;