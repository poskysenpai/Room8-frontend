import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ProfileNav from '../components/ProfileNav';

function ProfileLayout() {
  const location = useLocation();
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineOffset, setUnderlineOffset] = useState(0);

  const navRefs = {
    '/profile': useRef(null),
    '/profile/propertylisting': useRef(null),
    '/profile/saved': useRef(null),
    '/profile/about-me': useRef(null),
  };

  useEffect(() => {
    const activeRef = navRefs[location.pathname];
    if (activeRef && activeRef.current) {
      const { offsetWidth, offsetLeft } = activeRef.current;
      setUnderlineWidth(offsetWidth);
      setUnderlineOffset(offsetLeft);
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Profile Settings', path: '/profile' },
    { name: 'Property Listing', path: '/profile/propertylisting' },
    { name: 'Saved', path: '/profile/saved' },
    { name: 'AboutMe', path: '/profile/about-me' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ProfileNav />
      <div className="relative pt-10 pb-10 w-full h-10 ml-44">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="text-customGray px-8 py-2 font-notosans text-sm font-normal hover:text-customTeal"
            activeClassName="font-bold text-customTeal"
            ref={navRefs[item.path]}
          >
            {item.name}
          </NavLink>
        ))}
        <motion.span
          className="absolute bottom-0 h-0.5 bg-gray-200"
          style={{
            width: `46%`,
            left: 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute bottom-0 h-0.5 bg-customTeal"
          style={{
            width: `140px`,
            left: `${underlineOffset}px`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="flex-grow container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout;
