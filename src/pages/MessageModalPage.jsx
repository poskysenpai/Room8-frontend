import React, { useState, useEffect } from 'react';
import Chat from '../components/Chat';
import { useAuth } from '../context/AuthContext';
import MessageSidebar from '../components/MessageSidebar';
import { connection, fetchChatRooms, startConnection } from '../services/chat/ChatService';
import { useLocation } from 'react-router-dom';

function MessageModalPage() {
    const { getUser } = useAuth();
    const user = getUser();
    const [chatRooms, setChatRooms] = useState([]);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    const params = new URLSearchParams(useLocation().search);
    const ownerId = params.get("ownerId");

    useEffect(() => {
        const loadChatRooms = async () => {            
            if (user) {
                const fetchedChatRooms = await fetchChatRooms(user.sub);
                setChatRooms(fetchedChatRooms);
            }
        };

        loadChatRooms();
    }, [user]);

    useEffect(() => {
        const setupConnection = async () => {
            await startConnection();
            connection.on('ChatStarted', (chatRoom) => {
                setChatRooms(prevRooms => [chatRoom, ...prevRooms]);
                setSelectedChatRoom(chatRoom);
            });
        };

        setupConnection();

        return () => {
            connection.off('ChatStarted');
        };
    }, [ownerId]);

    if (!user) {
        console.error('User not authenticated');
        return <div>User not authenticated</div>;
    }
    return (
        <div className='flex h-screen'>
            <MessageSidebar chatRooms={chatRooms} onSelectChatRoom={setSelectedChatRoom} />
            <div className='flex flex-grow p-4'>
                {ownerId || selectedChatRoom ? (
                    <Chat
                        userId={user.sub}
                        chatUserId={ownerId ? ownerId : (user.sub === selectedChatRoom.user1Id ? selectedChatRoom.user2Id : selectedChatRoom.user1Id)} 
                        chatRoomId={selectedChatRoom ? selectedChatRoom.id : ''}
                    />
                ) : (
                    <div className='text-gray-400'>
                        Select a chat to start messaging.
                    </div>
                )}
            </div>
        </div>
    );
}

export default MessageModalPage;