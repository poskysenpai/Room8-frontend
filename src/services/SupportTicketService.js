import axiosClient, { handleRequest } from "../utils/AxiosClient";


export async function getAllSupportTickets(pageNumber = 1, pageSize = 10) {
    return handleRequest({
        errorMessage: 'Failed to load support tickets.',
        request: () => axiosClient.get(`/SupportTicket/all-support-tickets`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            params: {
                pageNumber,
                pageSize,
            },
        }),
    });
}