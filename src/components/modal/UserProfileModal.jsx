import React, { useState, useEffect } from 'react';
import UserProfModal from './UserProfModal';
import UserProfileNav from '../UserProfileNav';
import ProfileSettingsModal from './ProfileSettingsModal';
import SavedModal from './SavedModal';
import PropertyListing from './PropertyListing';
import ProfileNav from '../ProfileNav';
import { useLocation } from 'react-router-dom';
import AboutMePage from './AboutMePage';

function UserProfileModal({ initialActiveModal }) {
  const { state } = useLocation();
  const [activeModal, setActiveModal] = useState( state && state.initialActiveModal || 'profile-settings');

  useEffect(() => {
    if (initialActiveModal) {
      setActiveModal(initialActiveModal);
    }
  }, [initialActiveModal]);

  return (
    <div className='bg-gray-50 min-h-screen h-full'>
      <ProfileNav />
      <div className='pl-20 lg:pl-32 w-full py-10 max-w-[90%]'>
        <div><UserProfileNav setActiveModal={setActiveModal} activeModal={activeModal} /></div>
        <div className="">
          {activeModal === 'profile-settings' && <ProfileSettingsModal />}
          {activeModal === 'saved' && <SavedModal />}
          {activeModal === 'property-listing' && <PropertyListing />}
          {activeModal === 'about-me' && <AboutMePage />}
        </div>
      </div>
    </div>
  );
}

export default UserProfileModal;
