import React from 'react';
import { fetchUserById } from '../services/user/UserService';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const RealtorsProfile = () => {
  const [loggedInUser, setUser] = useState({});
  // const [id, setId] = useState('dc7977a0-37b3-4709-9910-89aff69ba01a');
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
 
  useEffect(() => {
    if (user) { // Ensure user is defined before proceeding
      const fetchUsersById = async () => {
        setLoading(true);
        try {
          const response = await fetchUserById(user.sub); // Use user.sub to fetch the user's data
          console.log(user.sub); // Logs the unique identifier of the user
          setUser(response); // Store the fetched user data in state
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
      fetchUsersById(); // Invoke the function to fetch user data
    } else {
      setLoading(false); // Stop loading if user is not defined
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) {return <div>Error: {error}</div>;}


  return (
    <div>
        <div className="relative max-h-full bg-gray-50 ml-4 md:ml-8 lg:ml-12 ">
          <div className="pb-10 pl-36 flex justify-left items-center p-20 ">
            <img className='w-50 h-50 rounded-full' src='./Realtor_image.png' alt='' />
            <div className="w-62 h-27 pl-16">
              <h2 className="font-['Acumin Pro'] text-4xl font-bold leading-7 w-62 h-7 items-center">{loggedInUser.firstName} {loggedInUser.lastName}</h2>
              <h3 className="font-['Inter'] font-normal text-base leading-7 pt-3 w-49 h-7 items-center text-gray-400">{loggedInUser.email}</h3>
              <p className="font-['Inter'] font-semibold text-sm leading-7 pt-3 w-39 h-7 items-center text-gray-400">
                Contact <span className="font-['Inter'] font-normal text-sm leading-7">: {loggedInUser.phoneNumber}</span>
              </p>
            </div>
          </div>

          <div className="pb-20 pl-52 pr-52 pt-85 items-center ml-51 mr-51">
            <div className="h-49 w-998">
              <div className="h-17 w-998 flex flex-row">
                <div className="h-17 w-28 flex items-center mb-4">
                  <p className="font-['Acumin Pro'] leading-8 text-2xl font-bold">Bio</p>
                </div>
                <div className="h-17 w-custom-900 ml-3 justify-evenly">
                  Lorem ipsum dolor sit amet consectetur. Ut eu lectus enim fringilla volutpat ipsum sapien. Mauris velit sagittis nunc est <br /> quis.
                  Faucibus mauris laoreet tortor habitasse eget faucibus euismod a. Nec varius interdum vel id erat volutpat eget tellus<br /> quis.
                  Faucibus mauris laoreet tortor habitasse eget faucibus euismod a. Nec varius interdum vel id erat volutpat eget tellus
                </div>
              </div>

              <div className="h-16 w-998 flex flex-row mb-4">
                <div className="h-16 w-28 flex items-center">
                  <p className="font-['Acumin Pro'] leading-8 text-2xl font-bold">Occupation</p>
                </div>
                <div className="flex items-center h-20 w-custom-900 ml-3">
                  {loggedInUser.occupation}
                </div>
              </div>

              <div className="h-8 w-998 flex flex-row">
                <div className="h-8 w-28 flex items-center">
                  <p className="font-['Acumin Pro'] leading-8 text-2xl font-bold">Location</p>
                </div>
                <div className="flex items-center h-8 w-custom-900 ml-3">
                  {loggedInUser.location}
                </div>
              </div>
            </div>
          </div>

          <div className="flex pl-48 pt-182 w-61 h-13">
            <div>
              <button className="font-['Acumin Pro'] w-23 h-13 rounded-lg pt-4 pr-6 pb-4 pl-6 bg-customTeal text-white font-normal text-sm leading-5 mr-2.5">Save changes</button>
            </div>
            <div>
              <button className="font-['Acumin Pro'] w-23 h-13 rounded-lg pt-4 pr-6 pb-4 pl-6 border border-customTeal text-customTeal font-normal text-sm leading-5">Cancel</button>
            </div>
          </div>
        </div>
    </div>
  );
};


export default RealtorsProfile;