import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  { BrowserRouter } from 'react-router-dom'
import UserManager, { AuthContext } from './Contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <UserManager>
    <App />
    </UserManager>
    </BrowserRouter>

);

