import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../services/auth/AuthService';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password
    };

    const token = await loginUser(loginDetails);
    if(token){
      login(token);
      navigate("/apartments");
    } 
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-cover bg-[url('./assets/Images/bg-image.jpg')]">
        <div className="relative  w-[578px] h-[490px] bg-white rounded-[5px] px-[0px] py-[0px] shadow-md">
          <div className="w-full p-10">
            <form action="" onSubmit={submitForm}>
              <h1 className="text-2xl font-bold text-pry-color leading-[74.5px] text-center font-'Oxygen' ">Room8s</h1>
              <h2 className="text-2xl font-semibold text-center leading-[33.5px] font-'Oxygen'">Welcome back to Room8s</h2>

              <div className="my-2">
                <p className="text-sm font-normal leading-[30px]">Username</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="SamuelC@gmail.com" required className="w-full h-11 p-3 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-pry-color" />
              </div>

              <div className="my-2">
                <p className="text-sm font-normal leading-[30px]">Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*********" className="w-full h-11 p-3 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-pry-color" />
              </div>

              <div className="flex justify-between text-sm">
                <Link to="/forgot-password" className="text-pry-color underline hover:text-teal-500">Forgot Password</Link>
              </div>

              <button type="submit" className="mt-3 pt-2 w-full h-10 bg-pry-color text-white px-[10px] py-[12px] rounded-[5px] cursor-pointer border-none hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500">
                LOG IN
              </button>

              <div className="mt-3 text-sm text-center">
                <p>Don't have an account? <Link to="/signup" className="text-pry-color hover:text-teal-500">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
