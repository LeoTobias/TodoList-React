import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Register  from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import authStore from "./authStore";
import Todo from './components/Todo.jsx';
import TodoForm from './components/TodoForm.jsx';
import Filter from './components/Filter.jsx';
import Search from './components/Search.jsx';

import './assets/Login.css';
import "./assets/Todo.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
