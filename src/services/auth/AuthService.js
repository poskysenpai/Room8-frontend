import axiosClient, { handleRequest } from '../../utils/AxiosClient';

export async function signup(newUser) {
    return await handleRequest({
        loadingMessage: "Signing up...",
        successMessage: "Signup successful, Please confirm your email!",
        errorMessage: "Something went wrong, please try again.",
        request: () => axiosClient.post('/Account/register', newUser)
    });
}

export async function loginUser(loginDetails) {
    const result = await handleRequest({
        loadingMessage: "Logging in...",
        successMessage: "Login successful!",
        errorMessage: "Something went wrong, please try again.",
        request: () => axiosClient.post('/Account/login', loginDetails)
    });

    if (result) {
        return result.token;
    }
}

export async function forgotPassword(email) {
    const result = await handleRequest({
        loadingMessage: "Sending password reset email...",
        successMessage: "Password reset email sent!",
        errorMessage: "Failed to send password reset email, please try again.",
        request: () => axiosClient.post(`/Account/forgot-password?email=${email}`)
    });
}

export async function resetPassword(resetObj){
    const result = await handleRequest({
        loadingMessage: "Resetting your password...",
        successMessage: "Password successfully reset",
        errorMessage: "Failed to reset password, please try again.",
        request: () => axiosClient.post("/Account/reset-password", resetObj)
    });
}
