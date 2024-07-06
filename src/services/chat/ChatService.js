import * as signalR from '@microsoft/signalr';
import axiosClient, { handleRequest } from '../../utils/AxiosClient';

const hubUrl = 'https://localhost:7228/chat';

const connection = new signalR.HubConnectionBuilder()
    .withUrl(hubUrl, {
        withCredentials: true
    })
    .withAutomaticReconnect()
    .build();

const startConnection = async () => {
    if (connection.state === signalR.HubConnectionState.Disconnected) {
        try {
            await connection.start();
            console.log('Connected to SignalR hub');
        } catch (err) {
            console.error('Error connecting to SignalR hub:', err);
            setTimeout(startConnection, 5000);
        }
    } else {
        console.log('Connection is already started');
    }
};

connection.onclose(async () => {
    await startConnection();
});

// Ensure the connection attempts to reconnect on disconnect
connection.onreconnecting((error) => {
    console.log(`Connection lost due to error "${error}". Reconnecting.`);
});

connection.onreconnected((connectionId) => {
    console.log(`Connection reestablished. Connected with connectionId "${connectionId}".`);
});

const joinChat = async (user1Id, user2Id) => {
    await startConnection();  // Ensure connection is started before invoking methods
    await connection.invoke('StartChat', user1Id, user2Id);
};

const sendMessage = async (senderId, receiverId, senderName, messageBody) => {
    await startConnection();  // Ensure connection is started before invoking methods
    await connection.invoke('SendMessage', senderId, receiverId, senderName, messageBody);
};

const fetchMessages = async (chatRoomId) => {
    const response = await handleRequest({
        // loadingMessage: "Fetching your messages...",
        // successMessage: "Messages fetched successfully",
        errorMessage: "Failed to fetch messages, please try again.",
        request: () => axiosClient.get(`/Messages?chatRoomId=${chatRoomId}`)
    }); 
    return response;
};

const fetchChatRooms = async (userId) => {
    const response = await handleRequest({
        // loadingMessage: "Fetching your chats...",
        // successMessage: "Chats fetched successfully",
        errorMessage: "Failed to fetch chats, please try again.",
        request: () => axiosClient.get(`/ChatRooms?userId=${userId}`)
    }); 
    return response;
}

export { connection, startConnection, joinChat, sendMessage, fetchMessages, fetchChatRooms };
