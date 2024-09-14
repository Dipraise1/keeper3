import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ContractInput from "./components/ContractInput";
import Confirmation from "./components/Confirmation";
import "./App.css";
import fakeLogo from "./assets/fake logo.png";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full min-h-[85vh] p-4 bg-transparent flex flex-col justify-center items-center">
          <img src={fakeLogo} alt="logo" className="w-32 object-contain" />
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
