import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import UserProfileModal from './UserProfileModal';
import HelpAndSupportView from './HelpAndSupportView';
import { useAuth } from '../../context/AuthContext';

const ProfileModal = ({ show }) => {
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  const [initialActiveModal, setInitialActiveModal] = useState('profile-settings');
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false); // Added the missing state
  const navigate = useNavigate();
  const { logout, getUser } = useAuth();
  const user = getUser();

  const names = user.name ? user.name.split(" ") : ['?','?'];
  const handleOpenModal = (modalName) => {
    setInitialActiveModal(modalName);
    setIsUserProfileModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUserProfileModalOpen(false);
  };

  const toggleHelpModal = () => {
    setIsHelpModalOpen(!isHelpModalOpen);
  };

  if (!show) return null;

  return (
    <div className="w-80 rounded-md bg-white absolute right-0 z-50 flex flex-col items-start">
      <div className="w-full px-4 py-4 bg-pry-color flex items-center">
        <div className="w-16 h-16 bg-gray-300 text-white rounded-full flex justify-center items-center text-2xl font-bold font-inter">
          {`${names[0][0]}${names[1][0]}`}
        </div>
        <div className="ml-4">
          <h1 className="text-xl font-bold font-inter">{`${names[0]} ${names[1]}`}</h1>
          <Link to="/realtorsprofile" className="text-sm text-gray-100 hover:text-white">Visit your Profile</Link>
        </div>
      </div>
      <nav className="w-full">
        <Link to="/user-profile" className="flex gap-3 px-4 py-2 text-black hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1 19C1 15.134 4.13401 12 8 12C8.8808 12 9.7236 12.1627 10.5 12.4596M12 19L14.025 18.595C14.2015 18.5597 14.2898 18.542 14.3721 18.5097C14.4452 18.4811 14.5147 18.4439 14.579 18.399C14.6516 18.3484 14.7152 18.2848 14.8426 18.1574L19 14C19.5523 13.4477 19.5523 12.5523 19 12C18.4477 11.4477 17.5523 11.4477 17 12L12.8426 16.1574C12.7152 16.2848 12.6516 16.3484 12.601 16.421C12.5561 16.4853 12.5189 16.5548 12.4903 16.6279C12.458 16.7102 12.4403 16.7985 12.405 16.975L12 19ZM12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#7FDBCA" strokeWidth="1.11429" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Edit Profile
        </Link>
        <Link to="/create-listing" className="flex gap-3 px-4 py-2 text-black hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M11.5 7L13.5 9M13.5 9L15.5 7M13.5 9V3M9 20C9 20.5523 8.55228 21 8 21C7.44771 21 7 20.5523 7 20C7 19.4477 7.44771 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#7FDBCA" strokeWidth="1.11429" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Create Listing
        </Link>
        <Link to="/user-profile" state={{ initialActiveModal: "saved" }}  className="flex gap-3 px-4 py-2 text-black hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 5.99995C10.2006 3.90293 7.19377 3.25485 4.93923 5.17509C2.68468 7.09533 2.36727 10.3059 4.13778 12.577C5.60984 14.4652 10.0648 18.4477 11.5249 19.7366C11.6882 19.8808 11.7699 19.9529 11.8652 19.9813C11.9483 20.006 12.0393 20.006 12.1225 19.9813C12.2178 19.9529 12.2994 19.8808 12.4628 19.7366C13.9229 18.4477 18.3778 14.4652 19.8499 12.577C21.6204 10.3059 21.3417 7.07513 19.0484 5.17509C16.7551 3.27505 13.7994 3.90293 12 5.99995Z" stroke="#7FDBCA" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          My Saved 
        </Link>
        <Link to="/messages" className="flex gap-3 px-4 py-2 text-black hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 11H8.01M12 11H12.01M16 11H16.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H7.8C6.11984 18 5.27976 18 4.63803 17.673C4.07354 17.3854 3.6146 16.9265 3.32698 16.362C3 15.7202 3 14.8802 3 13.2V8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V20Z" stroke="#7FDBCA" strokeWidth="1.11429" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Messaging
        </Link>
        
        <Link to="#" className="flex gap-3 px-4 py-2 text-black hover:bg-gray-100" onClick={toggleHelpModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#7FDBCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" className="stroke-[#7FDBCA] text-[#7FDBCA]"></circle>
            <path d="M12 16V16.01M9 9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9C15 10.1046 14.1046 11 13 11H12C11.4477 11 11 11.4477 11 12V12.5" className="stroke-current text-[#7FDBCA]"></path>
          </svg>
          Help
        </Link>
        {isHelpModalOpen && <HelpAndSupportView onClose={toggleHelpModal} />}
        
        <Link to="/logout" className="flex gap-3 px-4 py-2 pb-4 text-black hover:bg-gray-100 rounded-bl-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#7FDBCA" strokeWidth="1.11429" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Logout    
        </Link>
      </nav>
      {isUserProfileModalOpen && (
        <UserProfileModal
          onClose={handleCloseModal}
          initialActiveModal={initialActiveModal}
        />
      )}
    </div>
  );
};

ProfileModal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ProfileModal;
