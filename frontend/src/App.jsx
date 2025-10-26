
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import categoryPage from "./pages/category";
import FreshFlowers from "./pages/freshFlowers";
import DriedFlowers from "./pages/driedFlowers";
import LivePlants from "./pages/livePlants";
import AromaCandles from "./pages/aromaCandles";
import Freshners from "./pages/freshners";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<categoryPage />}></Route>
        <Route path="/freshFlowers" element={<FreshFlowers />}></Route>
        <Route path="/driedFlowers" element={<DriedFlowers />}></Route>
        <Route path="/livePlants" element={<LivePlants />}></Route>
        <Route path="/aromaCandles" element={<AromaCandles />}></Route>
        <Route path="/freshners" element={<Freshners />}></Route>
        
      </Routes>
    </Router>
    
    
    
    
    
  );
}

export default App;

