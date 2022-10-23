import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/loginPages/Login';
import AddRuleLogin from './components/loginPages/AddRuleLogin';
import RuleCheckUserLogin from './components/loginPages/RuleCheckUserLogin';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="AddRuleLogin" element={<AddRuleLogin/>} />
          <Route path="RuleCheckUserLogin" element={<RuleCheckUserLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
