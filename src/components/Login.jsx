import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTelegramUser = setTimeout(() => {
      setLoading(false);
      navigate('/contract');
    }, 2000);

    return () => clearTimeout(checkTelegramUser);
  }, [navigate]);

  if (loading) {
    return (
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-header">Checking Telegram Login...</h1>
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Login;