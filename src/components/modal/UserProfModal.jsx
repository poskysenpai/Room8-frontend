import React from "react";
import PropTypes from "prop-types";

function UserProfModal({ children, onClose, style }) {
  const handleClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 modal-overlay" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-md" style={style} onClick={handleClick}>
        {children}
      </div>
    </div>
  );
}

UserProfModal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  style: PropTypes.object 
};

export default UserProfModal;
