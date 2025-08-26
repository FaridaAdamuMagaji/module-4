/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css';


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Flowers from "./pages/flowers";
import AddFlower from "./pages/addFlower";
import { Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
        <Link to="/flowers">
          <button>Flowers</button>
        </Link>
        <Link to="/add-flower">
          <button>Add Flower</button>
        </Link>
      </nav>

      <hr></hr>
      <Routes>

        
        <Route path="/" element={<Navigate to="/flowers" />} />

        
        /*<Route path="/flowers" element={<Flowers />} />

        
        <Route path="/add-flower" element={<AddFlower />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;


/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
