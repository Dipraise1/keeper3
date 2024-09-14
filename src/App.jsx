import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ContractInput from './components/ContractInput';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-10 rounded-xl shadow-md">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/contract" element={<ContractInput />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;