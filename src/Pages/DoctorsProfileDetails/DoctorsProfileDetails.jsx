import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router';
import relogo from '../../assets/registration.png'
import Available from './Available';
import { BiMessageSquareError } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import { getDataFormLocalStorage, setDataFormLocalStorage } from '../../Utelities/Utelities';
const DoctorsProfileDetails = () => {

    const doctorsData = useLoaderData()
    const params = useParams()
    const paramsId = parseInt(params.id);
    const doctorProfile = Array.isArray(doctorsData) ? doctorsData.find(doctor => doctor.id === paramsId) : null
    const { id, image, name, speciality, designation, workplace, registrationNumber, availability, fee } = doctorProfile;
    const todayDate = new Date();
    const weekDay = todayDate.toLocaleString('en-US', { weekday: 'long' })
    const isAvailable = availability.includes(weekDay)
    console.log(isAvailable)
    const navigate = useNavigate()
    const handleBookNow = (id) => {
        const getmain = getDataFormLocalStorage()
        if (getmain.includes(id)) {

            toast.error('Appointment Scheduled Already Exist')
        }
        else {

            setDataFormLocalStorage(id)
            navigate('/mybookings', { state: { showTost: true, doctor: name } })
        }

    }
    return (
        <div className='max-w-[1281px] mx-auto px-2 md:px-10 '>
            <ToastContainer />
            <div className='space-y-4 py-14 bg-white rounded-3xl'>
                <h1 className='font-extrabold text-2xl md:text-5xl text-center max-w-[917px] mx-auto'>Doctor’s Profile Details</h1>
                <p className='text-xs md:text-base font-medium max-w-[1009px] mx-auto text-center px-4 md:px-0'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='bg-white p-4 md:p-14 my-10 rounded-3xl md:flex items-center gap-6'>
                <div>
                    <img className='w-[335px] h-[383px] rounded-3xl object-cover object-top border-1' src={image} alt="" />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-extrabold'>{name}</h1>
                    <div className='text-[#14141460] font-normal '>
                        <p>{speciality}</p>
                        <p>{designation}</p>
                    </div>
                    <p className='font-bold'> <span className='text-[#14141460] font-normal pb-2'>Working at</span> <br />
                        {workplace}
                    </p>
                    <div className='flex items-center gap-3 border-y-1 border-dashed py-4'>
                        <img src={relogo} alt="" />
                        <p>{registrationNumber}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Availability</p>
                        {
                            availability.map((available, index) => <Available key={index}
                                available={available}
                            ></Available>)
                        }
                    </div>
                    <p className='font-bold'>Consultation Fee: <span className='text-[#176AE5]'>Taka: {fee} <span className='text-[#14141450] font-semibold px-1'>(incl. Vat)</span> Per consultation</span></p>
                </div>
            </div>
            <div className='space-y-4 p-4 bg-white rounded-3xl mb-10'>
                <h1 className='font-extrabold text-2xl md:text-2xl text-center max-w-[917px] mx-auto'>Book an Appointment</h1>
                <div className='flex items-center justify-between border-y-1 border-dashed py-4'>
                    <p>Availability</p>
                    <p className='text-[#09982F] border-1 border-[#09982F20] bg-[#09982F10] px-3 py-2 rounded-full'> {isAvailable ? 'Doctor Available Today' : 'Doctor Not Available Today' }</p>
                </div>
                <p className='md:flex items-center gap-1 text-[#FFA000] border-1 border-[#FFA00020] bg-[#FFA00010] px-3 py-2 rounded-xl md:rounded-full text-center md:text-left'><span className='flex justify-center'><BiMessageSquareError /></span>
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                <button disabled={!isAvailable}  onClick={() => handleBookNow(id)} className={`${isAvailable ? 'py-2 bg-[#176AE5] rounded-full text-white text-lg font-bold w-full hover:bg-[#0055d4] cursor-pointer' : 'py-2 bg-gray-500 rounded-full text-white text-lg font-bold w-full cursor-not-allowed'}`}>Book Appointment Now</button>

            </div>
        </div>
    );
};

export default DoctorsProfileDetails;