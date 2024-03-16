import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages.jsx';
import ViewSurahPages from './pages/ViewSurahPages.jsx';
import DoaPages from './pages/DoaPages.jsx'; 
import AsmaPages from './pages/AsmaPages.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/ViewSurah/:nomor" element={<ViewSurahPages />} exact />
          <Route path="/DoaPages" element={<DoaPages />} exact />
          <Route path="/AsmaPages" element={<AsmaPages />} exact />
        </Routes>
      </Router>
  </React.StrictMode>,
)
