// ErrorPopup.js
import React from 'react';

function ErrorPopup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Okay</button>
      </div>
    </div>
  );
}

export default ErrorPopup;
