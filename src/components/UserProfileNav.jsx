import React, { useState, useEffect, useRef } from 'react';
import '../../src/index.css'; // Ensure this line imports your CSS file

function UserProfileNav({ setActiveModal, activeModal }) {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRefs = useRef([]);

  const navItems = [
    { name: "Profile Settings", modal: "profile-settings" },
    { name: "Property Listing", modal: "property-listing" },
    { name: "Saved", modal: "saved" },
    { name: "About Me", modal: "about-me" }
  ];

  const handleNavigationClick = (modal, index) => {
    setActiveModal(modal);
    const navItem = navRefs.current[index];
    setUnderlineStyle({
      width: navItem.offsetWidth,
      left: navItem.offsetLeft - 30 // Adjust the left position by subtracting 30 pixels
    });
  };

  useEffect(() => {
    const initialIndex = navItems.findIndex(item => item.modal === activeModal);
    if (initialIndex !== -1 && navRefs.current[initialIndex]) {
      const initialNavItem = navRefs.current[initialIndex];
      setUnderlineStyle({
        width: initialNavItem.offsetWidth,
        left: initialNavItem.offsetLeft - 30 // Adjust the left position by subtracting 30 pixels
      });
    }
  }, [activeModal]);

  return (
    <div className="relative mb-10"> {/* Change positioning to relative */}
      <nav className="max-w-4xl flex space-x-8 relative"> {/* Keep positioning relative for children */}
        {navItems.map((item, index) => (
          <button
            key={item.modal}
            ref={el => navRefs.current[index] = el}
            onClick={() => handleNavigationClick(item.modal, index)}
            className={`relative text-gray-700 focus:outline-none pb-2 ${activeModal === item.modal ? 'text-custom-green' : 'hover:text-custom-green'}`}
            style={{ paddingLeft: index === 0 ? '0' : undefined }} // Set paddingLeft to 0 for the first button
          >
            {item.name}
          </button>
        ))}
        <span
          className="absolute bottom-0 h-[2px] bg-gray-200 transition-all duration-300"
          style={{ width: 'calc(472px - 45px)', left: '-31px' }} // Adjust width and left position for the gray underline
        />
        <span
          className="absolute bottom-0 h-[2px] bg-custom-green transition-all duration-300"
          style={underlineStyle} // Green underline follows the selected item
        />
      </nav>
    </div>
  );
}

export default UserProfileNav;
