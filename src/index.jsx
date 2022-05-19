import { React, useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import "reflect-metadata"; // Fix error with reflect-metada
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Dashboard from './pages/dashboard'
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
        </Routes>
    </BrowserRouter>
);