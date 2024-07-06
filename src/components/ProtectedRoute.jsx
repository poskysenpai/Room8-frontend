import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';


const ProtectedRoute = ({ element, roles }) => {
  const { getUser } = useAuth();

  if (!getUser()) {
    toast("Please login to access the site");
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(getUser().role)) {
    toast("You don't have access to view this page.");
    return <Navigate to="/apartments" />;
  }

  return element;
};

export default ProtectedRoute;
