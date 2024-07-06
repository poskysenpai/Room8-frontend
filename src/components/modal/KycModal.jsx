// components/modal/KYCModal.js
import React from 'react';

const KYCModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <h1 className="text-2xl font-bold text-center mb-4">We'd love to get to know you better</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">What do you do?</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Self-employed</option>
                <option>Employed</option>
                <option>Student</option>
                <option>Unemployed</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">What Field/Industry?</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-gray-700">How old are you?</label>
              <input type="number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-gray-700">When is your birthday?</label>
              <input type="date" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div className="flex justify-center">
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-700">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KYCModal;
