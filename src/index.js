import {React, createRoot} from 'react';
import './index.css';
import App from './App';

import Dashboard from './pages/dashboard'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} exact />
                <Route path="/dashboard" element={<Dashboard />} exact />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
)