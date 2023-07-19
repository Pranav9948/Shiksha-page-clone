import React from 'react';

const ContentModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Your modal content goes here */}
        <p>This is the modal content.</p>
        <button className="text-blue-500" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContentModal;