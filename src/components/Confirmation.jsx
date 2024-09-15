import React from "react";
import { useLocation } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const location = useLocation();
  const { contractAddress, duration } = location.state || {};
  const dummyAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

  return (
    <div className="w-full flex justify-center items-center min-h-[85vh] bg-black bg-gradient-to-br from-[#0e0b21] to-[#2AABEE]">
      <div className="w-full max-w-[400px] sm:p-6 p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="sm:text-4xl text-3xl font-medium text-gray-200">
          Lock here
        </h1>
        <div className="flex flex-col justify-center items-center gap-2 bg-gray-100/20 rounded-lg p-2 text-center">
          <p className="sm:text-lg text-base text-gray-300">
            Contract Address:
          </p>
          <p className="text-white sm:text-xl text-lg font-medium break-all">
            {dummyAddress}
          </p>
        </div>
        <div className="sm:text-xl text-base text-white mt-4">
          <p>Duration: {duration} days</p>
        </div>
        <div className="my-2">
          <div className="w-12 h-12 border-[6px] border-white rounded-full ">
            <div className="w-10 h-10 border-t-[6px] border-blue-600 rounded-s-3xl animate-spin"></div>
          </div>
        </div>
        <p className="text-gray-200 sm:text-lg text-base">
          Waiting for confirmation...
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
