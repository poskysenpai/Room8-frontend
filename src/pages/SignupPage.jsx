import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../services/auth/AuthService";


const socialMediaOptions = [
    'Instagram',
    'Facebook',
    'Twitter',
    'LinkedIn',
    'YouTube',
    'Pinterest',
    'Other',
  ];
  
  function SignupPage() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [social, setSocial] = useState('');

    const submitForm = async (e) => {
      e.preventDefault();
      const newUser = {
        firstname,
        lastname,
        email,
        password,
        social
      };
  
      await signup(newUser);
    };
    

    return ( 
      <>
        <div className="min-h-screen flex items-center justify-center bg-cover bg-[url('./assets/Images/bg-image.jpg')]">
          <div className="w-[490px] lg:w-[50%]">
            <form className="m-10 pt-5 p-10 bg-white rounded-[5px] shadow-md">
              <h1 className="text-2xl font-bold text-[#7FDBCA] leading-[74.5px] text-center font-['Oxygen']">Room8s</h1>
              <h2 className="text-2xl font-semibold text-center leading-[33.5px] font-['Oxygen']">Create an account</h2>
  
              <div className="mb-4">
                <p className="text-sm font-normal leading-[30px]">Firstname</p>
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Samuel" required className="w-full h-10 p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7FDBCA]" />
              </div>

              <div className="mb-4">
                <p className="text-sm font-normal leading-[30px]">Lastname</p>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Chukwuma" required className="w-full h-10 p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7FDBCA]" />
              </div>
  
              <div className="mb-4">
                <p className="text-sm font-normal leading-[30px]">Email address</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="SamuelC@gmail.com" className="w-full h-10 p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7FDBCA]" />
              </div>
  
              <div className="mb-4">
                <p className="text-sm font-normal leading-[30px]">Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*********" className="w-full h-10 p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7FDBCA]" />
              </div>
  
              <div className="mb-4">
                <p className="text-sm font-normal leading-[30px]">How did you hear about us?</p>
                <div className="">
                  <select className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#7FDBCA]">
                    
                    {socialMediaOptions.map((option) => (
                      <option key={option} value={social} onChange={(e) => setSocial(e.target.value)}>{option}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
  
              <div className="flex items-center justify-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-2 text-gray-500 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
  
              <div className="flex justify-center items-center gap-5 mb-4 w-full h-10 border border-gray-300 rounded-lg text-white px-[10px] py-[12px] cursor-pointer bg-white-500 hover: focus:outline-none focus:ring-2 focus:ring-red-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_13_553)">
                    <path d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9943 0 14.0578 0 12C0 10.0101 0.483938 8.13362 1.34175 6.48132H1.34241L4.06078 6.9797L5.25159 9.68176C5.00236 10.4084 4.86652 11.1884 4.86652 12C4.86661 12.8809 5.02617 13.7249 5.31891 14.5035Z" fill="#FBBB00"/>
                    <path d="M23.7903 9.75824C23.9281 10.4841 24 11.2338 24 12C24 12.8591 23.9097 13.6971 23.7376 14.5055C23.1534 17.2563 21.627 19.6582 19.5125 21.358L19.5119 21.3574L16.088 21.1827L15.6034 18.1576C17.0064 17.3347 18.1029 16.047 18.6805 14.5055H12.2638V9.75824H23.7903Z" fill="#2F80ED"/>
                    <path d="M19.5118 21.3574L19.5125 21.358C17.456 23.011 14.8437 24 11.9999 24C7.43005 24 3.45688 21.4457 1.43005 17.6868L5.31885 14.5035C6.33224 17.2081 8.94126 19.1334 11.9999 19.1334C13.3146 19.1334 14.5463 18.778 15.6032 18.1576L19.5118 21.3574Z" fill="#28B446"/>
                    <path d="M19.6596 2.76262L15.7721 5.94525C14.6783 5.26153 13.3853 4.86656 12 4.86656C8.87213 4.86656 6.21431 6.88017 5.25169 9.68175L1.34245 6.48131H1.3418C3.33895 2.63077 7.36223 0 12 0C14.9117 0 17.5814 1.03716 19.6596 2.76262Z" fill="#F14336"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_13_553">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-sm text-gray-400 font-normal leading-[30px]">Sign in with Google</span>
              </div>
  
              <button type="submit" onClick={submitForm} className="mt-3 w-full h-10 bg-[#7FDBCA] text-white rounded-[5px] cursor-pointer hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500">Signup</button>
  
              <div className="mt-3 text-sm text-center">
                <p>Already have an account? <Link to="/login" className="text-[#7FDBCA] hover:underline">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default SignupPage;
  
