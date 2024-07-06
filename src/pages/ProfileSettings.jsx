import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

function ProfileSettings() {
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto mt-4 p-4">
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl text-white">
            SC
          </div>
          <div className="ml-4 flex space-x-2">
            <button className="px-4 py-2 bg-[#7FDBCA] text-white rounded-md">
              Add Photo
            </button>
            <button className="px-4 py-2 border border-[#7FDBCA] text-[#7FDBCA] rounded-md">
              Delete Photo
            </button>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Samuel" />
          </div>
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Carter" />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="samuellk@gmail.com" />
          </div>
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <div className="mt-1 block w-full">
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={phone => setPhone(phone)}
                inputProps={{
                  className: "p-2 border border-gray-300 rounded-md w-full"
                }}
                containerStyle={{ width: '100%' }} // Set the width of the container
              />
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Port Harcourt</option>
            </select>
          </div>
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium text-gray-700">Sex</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Self-employed" />
          </div>
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium text-gray-700">Zodiac Sign</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Virgo" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8 flex justify-start space-x-4 -mt-4"> {/* Applied negative margin */}
        <button className="px-4 py-2 bg-[#7FDBCA] text-white rounded-md">
          Save Changes
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ProfileSettings;
