import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileModal from './modal/ProfileModal';
import { useAuth } from '../context/AuthContext';

function ProfileNav({ notifications = 3}) {
    const [showModal, setShowModal] = useState(false);
    const { getUser } = useAuth();
    
    const user = getUser();
    const names = user.name ? user.name.split(" ") : ['?','?'];

    return (
        <div className='relative'>
            <div className='pl-6 pr-11 py-2 bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.04)]'>
                <div className="flex justify-between items-center">
                    <Link to="/apartments" className="text-pry-color cursor-pointer font-bold text-2xl font-Oxygen leading-7">Room8s</Link>
                    <input className="py-3 px-4 flex flex-grow max-w-[50%] bg-white rounded-full border outline-none text-gray-300 text-base font-normal font-inter leading-normal" placeholder='Search for Apartments.....' />
                    <div className="justify-center items-center gap-2 inline-flex">
                        <div className="flex flex-col justify-center">
                            <div className="mb-[-10px] ml-5 w-5 h-5 bg-[#7FDBCA] rounded-xl shadow border-2 border-white flex justify-center items-center">
                                <div className="text-white text-xs font-medium font-Roboto leading-4 tracking-tight">{notifications}</div>
                            </div>
                            <Link to="/" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.5 22C13.6 22 14.5 21.1 14.5 20H10.5C10.5 21.1 11.4 22 12.5 22ZM18.5 16V11C18.5 7.93 16.87 5.36 14 4.68V4C14 3.17 13.33 2.5 12.5 2.5C11.67 2.5 11 3.17 11 4V4.68C8.14 5.36 6.5 7.92 6.5 11V16L4.5 18V19H20.5V18L18.5 16ZM16.5 17H8.5V11C8.5 8.52 10.01 6.5 12.5 6.5C14.99 6.5 16.5 8.52 16.5 11V17Z" fill="black" fillOpacity="0.54"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full justify-center items-center inline-flex">
                            <button onClick={() => setShowModal(!showModal)} className="text-center text-white text-xl font-medium font-Figtree leading-10">{`${names[0][0]}${names[1][0]}`}</button>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileModal show={showModal} />
        </div>
    );
}

export default ProfileNav;
