import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
)
