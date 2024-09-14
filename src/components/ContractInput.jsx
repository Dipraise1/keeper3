import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContractInput.css';

function ContractInput() {
  const [contractAddress, setContractAddress] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { contractAddress, duration } });
  };

  return (
    <div className="contract-input-container">
      <div className="contract-input-content">
        <h1 className="contract-input-header">Enter Contract Details</h1>
        <form onSubmit={handleSubmit} className="contract-input-form">
          <input
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            placeholder="Contract Address"
            required
            className="contract-input-field"
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
            required
            className="contract-input-field"
          />
          <button 
            type="submit"
            className="contract-input-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContractInput;