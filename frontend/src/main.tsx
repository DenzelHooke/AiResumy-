import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard.tsx';
import Register from './pages/register.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // </StrictMode>,
  <BrowserRouter>
    <Navbar/>
  
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
)
