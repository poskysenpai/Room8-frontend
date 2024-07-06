import { useState } from 'react';
import PropTypes from 'prop-types';


function HelpAndSupport({ onClose }) {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // };


  return (
    <div onDoubleClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-1/3 h-60 p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Help & Support</h2>
        </div>
        <div className="mt-4">
          <select
            value={selectedItem}
            onChange={handleSelectChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-[#2d9380] focus:ring-[#2d9380]"
          >
            <option value="">What do you need help with?</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Billing Inquiries">Billing Inquiries</option>
            <option value="Account Management">Account Management</option>
            <option value="Feature Requests">Feature Requests</option>
            <option value="General Questions">General Questions</option>
          </select>
        </div>
      </div>
    </div>
    
  );
}

//HelpAndSupport.propTypes = {
  //onClose: PropTypes.func.isRequired,
//};

export default HelpAndSupport;