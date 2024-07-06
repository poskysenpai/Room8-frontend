import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const MessageSidebar = ({ chatRooms, onSelectChatRoom }) => {
    const { user } = useAuth();
    const [selectedChatRoom, setSelectedChatRoom] = useState(chatRooms[0]);

    const handleSelect = (chatRoom) => {
        onSelectChatRoom(chatRoom);
        setSelectedChatRoom(chatRoom);
    }

    return (
        <div className='p-4 border-r border-gray-300 bg-white flex flex-col h-screen'>
            <div className=''>
                <div className="justify-between items-center flex">
                    <div className=" text-gray-900 text-3xl font-bold font-['Outfit'] leading-10 tracking-tight">Message</div>
                    <div className="justify-start items-center gap-5 flex">
                        <svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M15.4687 10.5802H15.4772M10.376 10.5802H10.3845M5.28335 10.5802H5.29184M11.2248 10.5802C11.2248 11.049 10.8448 11.429 10.376 11.429C9.90726 11.429 9.52725 11.049 9.52725 10.5802C9.52725 10.1115 9.90726 9.73145 10.376 9.73145C10.8448 9.73145 11.2248 10.1115 11.2248 10.5802ZM16.3175 10.5802C16.3175 11.049 15.9375 11.429 15.4687 11.429C14.9999 11.429 14.6199 11.049 14.6199 10.5802C14.6199 10.1115 14.9999 9.73145 15.4687 9.73145C15.9375 9.73145 16.3175 10.1115 16.3175 10.5802ZM6.13213 10.5802C6.13213 11.049 5.75212 11.429 5.28335 11.429C4.81458 11.429 4.43457 11.049 4.43457 10.5802C4.43457 10.1115 4.81458 9.73145 5.28335 9.73145C5.75212 9.73145 6.13213 10.1115 6.13213 10.5802Z" stroke="#667085" strokeWidth="1.69756" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <rect x="1.5" y="1.5" width="18" height="18" fill="none" stroke="#667085" strokeWidth="1.7" rx="3" ry="3"/>
                            <path d="M12.1856 7.20886C12.6681 6.72635 13.4504 6.72635 13.933 7.20886C14.4155 7.69137 14.4155 8.47367 13.933 8.95618L10.5202 12.369C10.0861 12.803 9.86911 13.02 9.62177 13.1923C9.40224 13.3452 9.1654 13.4716 8.91619 13.5688C8.63542 13.6785 8.33434 13.738 7.73217 13.857L7.08911 13.984L7.25126 13.2943C7.38288 12.7344 7.4487 12.4545 7.5582 12.1935C7.65541 11.9618 7.77805 11.7416 7.92385 11.5369C8.08809 11.3064 8.29144 11.103 8.69815 10.6963L12.1856 7.20886Z" stroke="#667085" strokeWidth="1.69756" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <hr className='my-3'/>
                <div className='w-full py-2 px-3 flex items-center gap-4 border border-gray-300 rounded-md'>
                    <svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                        <path d="M13.5681 14.196L17.9856 18.6003M15.4392 9.68812C15.4392 13.2039 12.5891 16.054 9.07337 16.054C5.55761 16.054 2.70752 13.2039 2.70752 9.68812C2.70752 6.17236 5.55761 3.32227 9.07337 3.32227C12.5891 3.32227 15.4392 6.17236 15.4392 9.68812Z" stroke="#667085" strokeWidth="1.69756" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type='text' placeholder='Search' className='border-none outline-none'/>
                </div>
            </div>
            <ul className='h-full max-h-screen overflow-y-auto'>
                {chatRooms.map((chatRoom, index) => (
                    <li key={chatRoom.id} onClick={() => handleSelect(chatRoom)}>
                        <div className={`flex items-center my-2 py-3 px-3 w-full cursor-pointer border hover:bg-[#F2F4F7] hover:border-l-4 hover:border-l-pry-color ${!selectedChatRoom && index === 0 ? 'border-l-pry-color border-l-4' : ''} ${selectedChatRoom && selectedChatRoom.id === chatRoom.id ? 'border-l-pry-color border-l-4' : ''}`}> 
                            <img className='w-12 h-12 rounded-full' src={(user.sub === chatRoom.user1Id ? chatRoom.user1ProfileUrl : chatRoom.user2ProfileUrl) || "https://th.bing.com/th/id/OIP.tkDPEJyCG5SXIxU1Nb2A4wHaHa?rs=1&pid=ImgDetMain"} alt="" />
                            {user.sub === chatRoom.user1Id ? chatRoom.user2Name : chatRoom.user1Name} 
                        </div>
                        <hr className='my-3'/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageSidebar;
