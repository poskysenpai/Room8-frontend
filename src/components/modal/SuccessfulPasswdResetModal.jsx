// components/modal/SuccessfulPasswdResetModal.js
import React from 'react';

const SuccessfulPasswdResetModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100 relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>&times;</button>
        <h1 className="text-2xl font-bold text-[#7FDBCA] font-['Oxygen'] text-center mb-4">Successful Password Reset</h1>
        <div className="flex justify-center mb-4">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#EFF8FF" />
            <g clipPath="url(#clip0_154_349)">
              <path d="M57.9505 22.0493C57.5732 21.6724 57.1024 21.4028 56.5865 21.2681C56.0705 21.1335 55.528 21.1388 55.0147 21.2833L20.0782 31.1372C19.4904 31.3029 18.9672 31.6442 18.5785 32.1153C18.1898 32.5864 17.9542 33.1649 17.9031 33.7736C17.852 34.3822 17.9879 34.9919 18.2926 35.5212C18.5974 36.0505 19.0564 36.4742 19.6084 36.7356L34.2209 43.6574L44.2113 33.6669C44.4926 33.3856 44.8742 33.2276 45.272 33.2276C45.6699 33.2276 46.0515 33.3856 46.3328 33.6669C46.6141 33.9483 46.7722 34.3298 46.7722 34.7277C46.7722 35.1255 46.6141 35.5071 46.3328 35.7884L36.3424 45.7788L43.2641 60.3914C43.5039 60.9055 43.8858 61.3403 44.3647 61.6444C44.8435 61.9484 45.3995 62.1091 45.9667 62.1074C46.0526 62.1074 46.1391 62.1038 46.2262 62.0966C46.8359 62.0489 47.4161 61.8145 47.8878 61.4253C48.3596 61.0361 48.6999 60.5111 48.8626 59.9215L58.7164 24.985C58.8608 24.4717 58.866 23.9293 58.7314 23.4133C58.5968 22.8974 58.3272 22.4266 57.9505 22.0493Z" fill="#7FDBCA" />
            </g>
            <defs>
              <clipPath id="clip0_154_349">
                <rect width="48" height="48" fill="white" transform="translate(16 16)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="text-center text-[#828282] mb-6">
          You will get an email confirmation at ChiomaA@gmail.com
        </p>
        <div className="flex justify-center">
          <button className="bg-[#7FDBCA] text-white px-4 w-80 py-2 rounded-full hover:bg-[#2d9380]" onClick={onClose}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulPasswdResetModal;
