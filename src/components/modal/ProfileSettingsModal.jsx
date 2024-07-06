import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useAuth } from "../../context/AuthContext";
import { updateUserProfile } from "../../services/user/UserService";

function ProfileSettingsModal() {
  const { getUser } = useAuth();
  const user = getUser();
  const names = user.name ? user.name.split(" ") : ['?','?'];
  const [phone, setPhone] = useState("12345678");
  const [location, setLocation] = useState("");
  const [sex, setSex] = useState("");
  const [occupation, setOccupation] = useState("");
  const [zodiac, setZodiac] = useState("");

  async function updateProfile(){
    const userInfo = {
      phoneNumber: phone,
      location,
      occupation,
      sex,
      zodiac
    };
    
    await updateUserProfile(userInfo);

    setLocation("");
    setSex("");
    setOccupation("");
    setZodiac("");
    setPhone("");
  }

  return (
    <div className="lg:w-[75%]" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center gap-10 mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gray-200 font-Figtree flex items-center justify-center text-xl text-white">
            {`${names[0][0]}${names[1][0]}`}
          </div>
          <svg className="absolute bottom-0 right-[-20] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <circle cx="10.1958" cy="10.4859" r="9.78037" fill="#7FDBCA" stroke="white" strokeWidth="0.850467"/>
            <svg x="3" y="3" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <g clipPath="url(#clip0_61_222)">
                <path d="M7.19605 9.18703C8.13545 9.18703 8.89699 8.42549 8.89699 7.48609C8.89699 6.54669 8.13545 5.78516 7.19605 5.78516C6.25665 5.78516 5.49512 6.54669 5.49512 7.48609C5.49512 8.42549 6.25665 9.18703 7.19605 9.18703Z" fill="white"/>
                <path d="M11.732 2.95036H9.93465L9.2316 2.18494C9.02182 1.95248 8.71565 1.81641 8.39814 1.81641H5.99415C5.67665 1.81641 5.37048 1.95248 5.15503 2.18494L4.45764 2.95036H2.66032C2.03665 2.95036 1.52637 3.46064 1.52637 4.08432V10.8881C1.52637 11.5117 2.03665 12.022 2.66032 12.022H11.732C12.3556 12.022 12.8659 11.5117 12.8659 10.8881V4.08432C12.8659 3.46064 12.3556 2.95036 11.732 2.95036ZM7.19615 10.3211C5.63129 10.3211 4.36126 9.05105 4.36126 7.48619C4.36126 5.92133 5.63129 4.6513 7.19615 4.6513C8.76101 4.6513 10.031 5.92133 10.031 7.48619C10.031 9.05105 8.76101 10.3211 7.19615 10.3211Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_61_222">
                  <rect width="13.6075" height="13.6075" fill="white" transform="translate(0.392578 0.682129)"/>
                </clipPath>
              </defs>
            </svg>
          </svg>
        </div>
        <div className="ml-4 flex space-x-2">
          <button className="px-4 py-2 bg-pry-color hover:bg-teal-500 text-white rounded-md">
            Add Photo
          </button>
          <button className="px-4 py-2 border border-[#7FDBCA] hover:border-teal-500 text-[#7FDBCA] hover:text-teal-500 rounded-md">
            Delete Photo
          </button>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-bold text-gray-700">First Name</label>
          <input disabled type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value={names[0]} onClick={(e) => e.stopPropagation()} />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-bold text-gray-700">Last Name</label>
          <input disabled type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value={names[1]} onClick={(e) => e.stopPropagation()} />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-bold text-gray-700">Email</label>
          <input disabled type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value={user.email} onClick={(e) => e.stopPropagation()} />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-bold text-gray-700">Mobile Number</label>
          <div className="mt-1 block w-full">
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={phone => setPhone(phone)}
              inputProps={{
                className: "pl-12 p-2 border border-gray-300 rounded-md w-full"
              }}
              containerStyle={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-bold text-gray-700">Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onClick={(e) => e.stopPropagation()}>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
          </select>
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-bold text-gray-700">Sex</label>
          <select value={sex} onChange={(e) => setSex(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onClick={(e) => e.stopPropagation()}>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-bold text-gray-700">Occupation</label>
          <input value={occupation} onChange={(e) => setOccupation(e.target.value)} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Self-employed" onClick={(e) => e.stopPropagation()} />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-bold text-gray-700">Zodiac Sign</label>
          <input value={zodiac} onChange={(e) => setZodiac(e.target.value)} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Virgo" onClick={(e) => e.stopPropagation()} />
        </div>
      </div>
      <div className="space-x-5">
        <button onClick={updateProfile} className="px-4 py-2 bg-[#7FDBCA] hover:bg-teal-500 text-white rounded-md">
            Save Changes
        </button>
        <button className="px-4 py-2 border border-[#7FDBCA] text-[#7FDBCA] hover:text-teal-500 hover:border-teal-500 rounded-md">
            Cancel
        </button>
      </div>
    </div>
  );
}

export default ProfileSettingsModal;
