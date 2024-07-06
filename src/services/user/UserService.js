import Api, { handleRequest } from '../../utils/AxiosClient';

export async function fetchAllUsers() {
    const result = await handleRequest({
        // loadingMessage: "Loading tenant information...",
        // successMessage: "Tenant information retrieved successfully!",
        errorMessage: "Failed to retrieve tenant information, please try again.",
        request: () => Api.get(`/User/all`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }  
        })
    });
   return result;
}

export async function updateUserProfile(userInfo) {
    const result = await handleRequest({
        loadingMessage: "Updating user information...",
        successMessage: "User information updated successfully!",
        errorMessage: "Failed to update user information, please try again.",
        request: () => Api.put(`/User/EditProfile`, userInfo,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }  
        })
    });
   return result;
}

export default fetchAllUsers;

export async function fetchUserById(id) {
    const result = await handleRequest({
        // loadingMessage: "Loading tenant information...",
        // successMessage: "Tenant information retrieved successfully!",
        errorMessage: "Failed to retrieve tenant information, please try again.",
        request: () => Api.get(`/User/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }  
        })
    });
   return result;
}