import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    useEffect(() => {
        handleLogout();
    }, []);

  return (
    <div></div>
  )
}

export default Logout