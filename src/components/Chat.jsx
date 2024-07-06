import React, { useState, useRef, useEffect } from 'react';
import { connection, startConnection, joinChat, sendMessage, fetchMessages } from '../services/chat/ChatService';
import { useAuth } from '../context/AuthContext';

const Chat = ({ userId, chatUserId, chatRoomId }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const { getUser } = useAuth();
    const user = getUser();
    const [isAtBottom, setIsAtBottom] = useState(true);
    const [newMessageCount, setNewMessageCount] = useState(0);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (isAtBottom) {
            const chatContainer = chatContainerRef.current;
            chatContainer.scrollTop = chatContainer.scrollHeight; 
            setNewMessageCount(0);
        } else {
            setNewMessageCount(prevCount => prevCount + 1);
        }
    }, [messages]);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        const isUserAtBottom = scrollHeight - scrollTop <= clientHeight + 5; // Adding a small threshold
        setIsAtBottom(isUserAtBottom);
    };

    useEffect(() => {
        const initChat = async () => {
            await startConnection();

            connection.on('ReceiveMessage', handleReceiveMessage);
            connection.on('ReceiveNotification', handleReceiveNotification);

            await joinChat(userId, chatUserId);
            const fetchedMessages = await fetchMessages(chatRoomId);
            setMessages(fetchedMessages);
            const chatContainer = chatContainerRef.current;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        };

        initChat();

        return () => {
            connection.off('ReceiveMessage', handleReceiveMessage);
            connection.off('ReceiveNotification', handleReceiveNotification);
        };
    }, [userId, chatUserId, chatRoomId]);

    const handleReceiveMessage = (receivedMessage) => {
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    const handleReceiveNotification = (notification) => {
        console.log('notification', notification);
    };

    const handleSendMessage = async () => {
        if (message.trim()) {
            const newMessage = {
                senderId: userId,
                senderName: user.name,
                messageBody: message,
            };
            setMessage('');
            await sendMessage(userId, chatUserId, user.name, message);
        }
    };

    return (
        <div className='flex flex-col h-full flex-grow gap-5 w-full'>
            <h2>Chat</h2>
            <div 
                className='no-scrollbar h-full max-h-full overflow-y-auto' 
                ref={chatContainerRef} 
                onScroll={handleScroll}
            >
                {messages.map((msg, index) => (
                    <div key={index} className='flex items-center mt-2 gap-2'>
                        <img className='w-12 h-12 rounded-full' src={msg.senderProfileUrl || "https://th.bing.com/th/id/OIP.tkDPEJyCG5SXIxU1Nb2A4wHaHa?rs=1&pid=ImgDetMain"} alt="" />
                        <div>
                            <div className='flex items-baseline gap-1'>
                                <p className='font-semibold tracking-[0.00794rem] text-[0.84875rem] leading-[140%]'>{msg.senderName}</p> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                                    <circle cx="3.52647" cy="3.94346" r="3.39512" fill="#D0D5DD"/>
                                </svg>
                                <p className='font-normal text-[0.84875rem] text-gray-500 leading-[140%] font-inter'>{msg.createdAt.substring(0,16)}</p>
                            </div>
                            <p className='font-normal text-[0.84875rem] text-gray-500 leading-[140%] font-inter'>{msg.messageBody}</p>
                        </div>
                    </div>
                ))}
            </div>
            {!isAtBottom && newMessageCount > 0 && (
                <div className="new-message-notification">
                    {newMessageCount} new message{newMessageCount > 1 ? 's' : ''}
                </div>
            )}
            <div className='flex flex-wrap flex-col w-full bg-white'>
                <hr />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className='w-full text-gray-500 h-20 my-3 px-3 py-3 outline-none bg-gray-50'
                />
                <div className='flex justify-between lg:mb-5'>
                    <div className='flex gap-3'>
                        <svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M16.5824 18.4055L14.6388 16.4781C13.7455 15.5923 13.2989 15.1493 12.7846 14.9832C12.3323 14.8371 11.8454 14.8371 11.393 14.9832C10.8788 15.1493 10.4321 15.5923 9.53879 16.4781L5.01321 21.0362M16.5824 18.4055L16.9687 18.0223C17.8808 17.1179 18.3368 16.6656 18.86 16.5006C19.3202 16.3554 19.8147 16.3611 20.2714 16.5168C20.7907 16.6939 21.2362 17.1565 22.1272 18.0816L23.073 19.042M16.5824 18.4055L21.0586 22.9607M8.58826 4.896H19.4526C20.7203 4.896 21.3541 4.896 21.8383 5.14269C22.2642 5.35969 22.6104 5.70595 22.8274 6.13184C23.0741 6.61601 23.0741 7.24983 23.0741 8.51746V19.3818C23.0741 20.6495 23.0741 21.2833 22.8274 21.7675C22.6104 22.1934 22.2642 22.5396 21.8383 22.7566C21.3541 23.0033 20.7203 23.0033 19.4526 23.0033H8.58826C7.32063 23.0033 6.68681 23.0033 6.20264 22.7566C5.77675 22.5396 5.4305 22.1934 5.21349 21.7675C4.9668 21.2833 4.9668 20.6495 4.9668 19.3818V8.51746C4.9668 7.24983 4.9668 6.61601 5.21349 6.13184C5.4305 5.70595 5.77675 5.35969 6.20264 5.14269C6.68681 4.896 7.32063 4.896 8.58826 4.896ZM19.679 10.5545C19.679 11.8046 18.6656 12.8179 17.4156 12.8179C16.1655 12.8179 15.1522 11.8046 15.1522 10.5545C15.1522 9.30448 16.1655 8.29112 17.4156 8.29112C18.6656 8.29112 19.679 9.30448 19.679 10.5545Z" stroke="#667085" strokeWidth="1.69756" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M15.5902 16.4724L15.9442 16.1184C17.3126 14.75 17.1658 12.3846 15.6162 10.835L15.2154 10.4342C13.4446 8.66337 10.7412 8.49557 9.17731 10.0595L4.92981 14.307C3.36592 15.8709 3.53372 18.5742 5.30459 20.3451L5.7054 20.7459C7.25491 22.2954 9.62035 22.4422 10.9887 21.0738L11.3427 20.7199M17.3392 8.31049L17.6931 7.95653C19.0615 6.58813 21.427 6.73495 22.9765 8.28446L23.3773 8.68527C25.1482 10.4561 25.316 13.1595 23.7521 14.7234L19.5046 18.9709C17.9407 20.5348 15.2373 20.367 13.4665 18.5961L13.0657 18.1953C11.5161 16.6458 11.3693 14.2804 12.7377 12.912L13.0917 12.558" stroke="#667085" strokeWidth="1.69756" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M9.58925 15.9861C9.58925 15.9861 11.1171 18.0232 13.6634 18.0232C16.2097 18.0232 17.7375 15.9861 17.7375 15.9861M16.719 10.8934H16.7292M10.6078 10.8934H10.618M23.8488 13.949C23.8488 19.5743 19.2886 24.1344 13.6634 24.1344C8.03817 24.1344 3.47803 19.5743 3.47803 13.949C3.47803 8.32382 8.03817 3.76367 13.6634 3.76367C19.2886 3.76367 23.8488 8.32382 23.8488 13.949ZM17.2283 10.8934C17.2283 11.1747 17.0003 11.4027 16.719 11.4027C16.4377 11.4027 16.2097 11.1747 16.2097 10.8934C16.2097 10.6122 16.4377 10.3842 16.719 10.3842C17.0003 10.3842 17.2283 10.6122 17.2283 10.8934ZM11.1171 10.8934C11.1171 11.1747 10.889 11.4027 10.6078 11.4027C10.3265 11.4027 10.0985 11.1747 10.0985 10.8934C10.0985 10.6122 10.3265 10.3842 10.6078 10.3842C10.889 10.3842 11.1171 10.6122 11.1171 10.8934Z" stroke="#667085" strokeWidth="1.69756" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <button className='bg-pry-color text-white px-5 lg:px-10 py-2 rounded-lg hover:bg-teal-500' onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
