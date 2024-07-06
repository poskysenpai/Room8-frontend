import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetPassword } from '../services/auth/AuthService';

const ResetPassword = () => {
  const[newPassword, setNewPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const params = new URLSearchParams(useLocation().search);
  const token = params.get("token");
  const email = params.get("email");

  const submitForm = async (e) => {
    e.preventDefault();

    if(newPassword !== confirmPassword){
      toast.error("Please ensure the two fields are the same.")
    }

    else{
      const resetObj = {
        email,
        newPassword,
        confirmPassword,
        token
      }
      await resetPassword(resetObj);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-top bg-no-repeat bg-[url('../../background_img.png')]">
      <div className="bg-white p-6 shadow-lg max-w-md w-full box-border text-center">
        <h1 className="font-Oxygen font-bold text-2xl leading-9 text-customTeal mb-4">
          Room8s
        </h1>
        <h2 className="font-nunito font-semibold text-2xl leading-7 text-customgray900 mb-6">
          Reset your password
        </h2>
        <form onSubmit={submitForm}>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-sm font-semibold text-customgray800">
              Password
            </label>
            <input
              type="password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-sm font-semibold text-customgray800">
              Confirm Password
            </label>
            <input
              type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="font-inter w-full p-3 bg-customTeal text-white rounded font-semibold hover:bg-teal-500"
          >
            Send reset instructions
          </button>
        </form>
        <p className="mt-4 text-sm font-normal text-customGray">
          Go back to{' '}
          <Link to="/login" className="text-customTeal underline font-semibold hover:text-teal-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
