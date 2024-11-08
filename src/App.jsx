import React from 'react';
import './App.css';
import Home from './Pages/Home/home';
import Heritage from './Pages/Heritage/heritage'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} /> {/* Default redirect to sign-up */}
                <Route path="/home" element={<Home />} />
                <Route path="/heritage" element={<Heritage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
