import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContractInput.css";

function ContractInput() {
  const [contractAddress, setContractAddress] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { contractAddress, duration } });
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[85vh] bg-black bg-gradient-to-br from-[#0e0b21] to-[#2AABEE]">
      <div className="w-full max-w-[400px] sm:p-8 p-4 flex flex-col justify-center items-center gap-8">
        <h1 className="sm:text-3xl text-2xl text-center font-medium text-white">
          Enter Contract Details
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-start w-full gap-4 sm:text-xl text-lg text-white font-normal"
        >
          <input
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            placeholder="Contract Address"
            required
            className="w-full outline-none p-2 border border-gray-400 bg-[#ffffff1a] placeholder:text-gray-400"
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
            required
            className="w-full outline-none p-2 border border-gray-400 bg-[#ffffff1a] placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="w-full py-3 text-xl bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContractInput;
