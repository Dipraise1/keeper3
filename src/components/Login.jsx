import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTelegramUser = setTimeout(() => {
      setLoading(false);
      navigate("/contract");
    }, 2000);
    return () => clearTimeout(checkTelegramUser);
  }, [navigate]);

  if (loading) {
    return (
      <div className="login-container w-full min-h-[85vh] flex flex-col justify-center items-center ">
        <div className="max-w-[90%] w-[320px] bg-white text-center px-2 py-6 rounded-lg">
          <h1 className="text-black font-medium text-xl">
            Checking Telegram Login
          </h1>
          <div className="flex flex-col justify-center items-center mt-4">
            <div className="w-12 h-12 border-[6px] border-eth-blue rounded-full ">
              <div className="w-10 h-10 border-t-[6px] border-blue-600 rounded-s-3xl animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Login;
