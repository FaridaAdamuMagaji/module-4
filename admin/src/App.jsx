/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css';


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Flowers from "./pages/flowers";
import AddFlower from "./pages/addFlower";



function App() {
  return (
    <Router>
      <div>
        
      
      <Routes>
        
        
        <Route path="/" element={<Navigate to="/flowers" />} />
        

        <Route path="/flowers" element={<Flowers />} />

        
        <Route path="/add-flower" element={<AddFlower />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;


