import React, { useState, useEffect } from 'react';
import UserViewModal from '../components/modal/UserViewModal';
import AdminNav from '../components/AdminNav';
import { getAllSupportTickets } from '../services/SupportTicketService';

const SupportTicketPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [supportTickets, setSupportTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSupportTickets = async () => {
            try {
                const response = await getAllSupportTickets(1, 10);
                setSupportTickets(response.pageItems);
            } catch (error) {
                console.error('Failed to load support tickets:', error);
            } finally {
                setLoading(false);
            }
        };

        loadSupportTickets();
    }, []);

    const getStatusClass = (status) => {
        switch (status) {
            case 'Resolved':
                return 'text-green-500 font-medium';
            case 'In Progress':
                return 'text-blue-500 font-medium';
            case 'Open':
                return 'text-red-500 font-medium';
            default:
                return '';
        }
    };

    const handleModalOpen = (ticket) => {
        setSelectedTicket(ticket);
        setShowModal(true);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full h-screen flex flex-col'>
            <AdminNav />
            <div className='w-full px-10 py-10 flex flex-col flex-grow gap-5 overflow-auto'>
                <div className='font-semibold font-outfit text-2xl text-start'>Support Tickets</div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white font-outfit">
                            <tr>
                                <th className="px-6 py-3 text-center text-lg font-medium text-black tracking-wider">Ticket ID</th>
                                <th className="px-6 py-3 text-center text-lg font-medium text-black tracking-wider">Ticket Name</th>
                                <th className="px-6 py-3 text-center text-lg font-medium text-black tracking-wider">Ticket Description</th>
                                <th className="px-6 py-3 text-center text-lg font-medium text-black tracking-wider">User ID/Username</th>
                                <th className="px-6 py-3 text-center text-lg font-medium text-black tracking-wider">Date/Time</th>
                                <th className="px-6 py-3 text-center text-lg font-medium text-black tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y font-inter divide-gray-200">
                            {supportTickets.map((ticket, index) => (
                                <tr key={ticket.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-500 text-center">{ticket.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500 text-center">{ticket.ticketTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500 text-center">{ticket.ticketDescription}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500 text-center">{ticket.userId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500 text-center">{new Date(ticket.createdAt).toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-center">
                                        <span className={getStatusClass(ticket.status)}>{ticket.status}</span>
                                        <button onClick={() => handleModalOpen(ticket)} className="ml-4" aria-label={`View details for ticket ${ticket.id}`}>
                                            <svg className="w-[16px] h-[16px] fill-none" viewBox="0 0 5 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.29883 4C3.39883 4 4.29883 3.1 4.29883 2C4.29883 0.9 3.39883 0 2.29883 0C1.19883 0 0.298828 0.9 0.298828 2C0.298828 3.1 1.19883 4 2.29883 4ZM2.29883 6C1.19883 6 0.298828 6.9 0.298828 8C0.298828 9.1 1.19883 10 2.29883 10C3.39883 10 4.29883 9.1 4.29883 8C4.29883 6.9 3.39883 6 2.29883 6ZM2.29883 12C1.19883 12 0.298828 12.9 0.298828 14C0.298828 15.1 1.19883 16 2.29883 16C3.39883 16 4.29883 15.1 4.29883 14C4.29883 12.9 3.39883 12 2.29883 12Z" className="fill-[#323232]" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <UserViewModal showModal={showModal} setShowModal={setShowModal} ticket={selectedTicket} />
        </div>
    );
};

export default SupportTicketPage;
