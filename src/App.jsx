import React from 'react';
import
{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ResetPassword from "./pages/ResetPassword";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import RegisterNumber from "./pages/RegisterNumber";
import SignupPage from "./pages/SignupPage";

import { AuthProvider } from "./context/AuthContext";
import ApartmentPage from "./pages/ApartmentPage";
import SuccessfulPasswdReset from "./pages/SuccessfulPasswdResetPage";
import RealtorsProfile from "./pages/RealtorsProfile";
import ApartmentDetailPage from "./pages/ApartmentDetailPage";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import UserAnalytics from "./pages/UserAnalytics";
import TenantDatabasePage from "./pages/TenantDatabasePage";
import CreateListingPage from './pages/CreateListingPage';
import SupportTicketPage from './pages/SupportTicketPage';
import MessageModalPage from './pages/MessageModalPage';
import UserProfileModal from './components/modal/UserProfileModal';
import Logout from './pages/Logout';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/registernumber" element={<RegisterNumber />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/apartments" element={<ProtectedRoute element={<ApartmentPage />} roles={['User']} />} />

      <Route path="/successfulpasswordreset" element={<SuccessfulPasswdReset />} />

      <Route path="/messages" element={<ProtectedRoute element={<MessageModalPage />} roles={['User']} />} />
      <Route path="/user-profile" element={<ProtectedRoute element={<UserProfileModal />} roles={['User', 'admin']} />} />

      <Route path="/apartment-details" element={<ProtectedRoute element={<ApartmentDetailPage />} roles={['User']} />} />
      <Route path="/realtorsprofile" element={<RealtorsProfile />} />

      <Route path="/admin" element={<ProtectedRoute element={<AdminLayout />} roles={['User']} />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/tenant-database" element={<TenantDatabasePage />} />
        <Route path="/admin/user-analytics" element={<UserAnalytics />} />
        <Route path="/admin/support-tickets" element={<SupportTicketPage />} />
      </Route>

      <Route path='/logout' element={<Logout />} />

      <Route path='/create-listing' element={<ProtectedRoute element={<CreateListingPage />} roles={['user']} />} />
    </Route>

  )
);


function App()
{

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
