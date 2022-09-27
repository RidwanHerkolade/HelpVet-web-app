import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Pages/Register';
import RegisterHead from './Pages/RegisterHead';
import Confirm from './Pages/Confirm';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './component/Staff/Profile';

ReactDOM.render(
  <BrowserRouter>
       <Routes>
           <Route path="/" element={<App />} />
           <Route path="register" element={<Register />} />
           <Route path="registerhead" element={<RegisterHead />} />
           <Route path="confirm" element={<Confirm/>} />
           <Route path="/staff/:staffId" element={<Profile />} />
           
       
      </Routes>
  
  </BrowserRouter>,




document.getElementById('root'))



