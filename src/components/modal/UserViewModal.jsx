import React, { useState } from 'react';

const UserViewModal = ({ showModal, setShowModal, ticket }) => {
    const [status, setStatus] = useState(ticket ? ticket.ticketstatus : '');

    if (!showModal || !ticket) return null;

    const handleSaveAndContinue = () => {
        // Handle save logic here if necessary
        setShowModal(false);
        console.log(status);
        //update ticket status
    };

    const handleOutsideClick = () => {
        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-100 bg-opacity-50 z-50" onClick={handleOutsideClick}>
            <div
                className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="px-4 py-5 sm:p-6">
                    <h1 className="text-2xl font-bold mb-4">Ticket Description</h1>
                    <textarea
                        className="text-[#00000080] w-full border rounded p-2 mb-4 font-lato"
                        rows="4"
                        defaultValue={ticket.ticketdescription}
                        disabled
                    />
                    <div className="mb-4">
                        <label className="font-outfit text-lg font-medium leading-5 text-left text-[#000000]">Change Status:</label>
                        <div className="flex gap-5 mt-5">
                            <div className="text-[#00000080]">
                                <input type="radio" className="form-radio cursor-pointer" name="status" value="Completed" checked={status === 'Completed'} onChange={() => setStatus('Completed')} />
                                <span className="ml-2 mx-1 my-8 font-lato text-custom font-normal leading-tight text-left">Complete</span>
                            </div>
                            <div className="text-[#00000080]">
                                <input type="radio" className="form-radio cursor-pointer" name="status" value="Not Started" checked={status === 'Not Started'} onChange={() => setStatus('Not Started')} />
                                <span className="ml-2 font-lato text-custom font-normal leading-tight text-left">Not Started</span>
                            </div>
                            <div className="text-[#00000080] pl-px-2">
                                <input type="radio" className="form-radio cursor-pointer" name="status" value="In Progress" checked={status === 'In Progress'} onChange={() => setStatus('In Progress')} />
                                <span className="ml-2 font-lato text-custom font-normal leading-tight text-left">In Progress</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleSaveAndContinue} className="bg-[#7FDBCA] w-80 hover:bg-[#2d9380] text-white px-4 py-2 rounded">Save and continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserViewModal;
