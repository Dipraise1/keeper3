import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

function Confirmation() {
  const location = useLocation();
  const { contractAddress, duration } = location.state || {};
  const dummyAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h1 className="confirmation-header">Lock here</h1>
        <div className="address-container">
          <p className="address-label">Contract Address:</p>
          <p className="address">{dummyAddress}</p>
        </div>
        <div className="details-container">
          <p className="detail-item">Duration: {duration} days</p>
        </div>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
        <p className="waiting-text">Waiting for confirmation...</p>
      </div>
    </div>
  );
}

export default Confirmation;