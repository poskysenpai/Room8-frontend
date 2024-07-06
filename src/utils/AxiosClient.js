import axios from 'axios';
import { toast } from 'react-toastify';

export const Api = axios.create({
    baseURL: 'https://localhost:7228/api'
})

export default Api;

export async function handleRequest({ loadingMessage, successMessage, errorMessage, request }) {
    const loadingToast = toast.loading(loadingMessage);

    try {
    const response = await request();
    const apiResponse = response.data;

    if (apiResponse.isSuccessful) {
        toast.update(loadingToast, {
            render: successMessage,
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true
        });
        return apiResponse.data;
    } else {
        toast.update(loadingToast, {
            render: apiResponse.message || errorMessage,
            type: "error",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true
        });
        console.log(apiResponse)
        console.log(apiResponse.message || "Request failed");
        return apiResponse.data;
    }
} catch (error) {
    toast.update(loadingToast, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true
    });
    console.error('API Request Error:', error);
    throw error; 
    }
}