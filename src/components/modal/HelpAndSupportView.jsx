import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

function HelpAndSupportView({ onClose }) {
  const [complaint, setComplaint] = useState('');
  const [ ticketTitle, setTicketTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSaveAndContinue = async () => {
    setLoading(true);
    setError(null);
    const requestObject = {
      ticketTitle,
      ticketDescription: complaint
    };

    try {
      const response = await axios.post('https://localhost:7228/api/SupportTicket/Create', 
                                        requestObject,
                                        {
                                          headers: {
                                              Authorization: `Bearer ${localStorage.getItem('token')}` 
                                          }  
                                      });
      onClose(); // Close the modal on successful API response
    } catch (error) {
      console.error('Error submitting complaint', error);
      setError('Failed to submit complaint');
    } finally {
      setLoading(false);
    }
  };

  const handleTextareaChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the backdrop
  };

  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div onClick={handleModalClick} className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div className="px-4 py-5 sm:p-6">
         <p className="text-sm font-normal leading-[30px]">Title</p>
            {/* <input type="text" value={ticketTitle} onChange={(e) => SetComplain(e.target.value)} placeholder="Title" required className="w-full h-10 p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7FDBCA]" /> */}
            <select
            value={ticketTitle}
            onChange={e => setTicketTitle(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2 outline-none"
          >
            <option value="">What do you need help with?</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Billing Inquiries">Billing Inquiries</option>
            <option value="Account Management">Account Management</option>
            <option value="Feature Requests">Feature Requests</option>
            <option value="General Questions">General Questions</option>
          </select>
         </div>
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-1xl font-bold mb-4">What do you need help with?</h1>
          <textarea
            className="text-[#00000080] w-full border rounded p-2 mb-4 font-lato outline-none"
            rows="4"
            value={complaint}
            onChange={handleTextareaChange}
            placeholder="Write your complaint..."
          />
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-center mt-1.5">
            <button
              onClick={handleSaveAndContinue}
              className="bg-[#7FDBCA] w-80 hover:bg-[#2d9380] text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Save and continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

HelpAndSupportView.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default HelpAndSupportView;
