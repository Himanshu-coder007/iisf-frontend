import React from 'react';

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null; // Don't render the modal if it's not visible

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when clicking inside the modal
      >
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
