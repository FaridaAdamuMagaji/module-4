
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import categoryPage from "./pages/category";
import FreshFlowers from "./pages/freshFlowers";
import DriedFlowers from "./pages/driedFlowers";
import LivePlants from "./pages/livePlants";
import AromaCandles from "./pages/aromaCandles";
import Freshners from "./pages/freshners";
import ProductPage from "./pages/productPage";
import AboutPage from "./pages/aboutPage";
import CheckoutPage from "./pages/checkoutPage";
import SigninPage from "./pages/signinpage";

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
        <Route path="/productPage" element={<ProductPage />}></Route>
        <Route path="/aboutPage" element={<AboutPage />}></Route>
        <Route path="/checkoutPage" element={<CheckoutPage />}></Route>
        <Route path="/signinPage" element={<SigninPage />}></Route>
        
        
      </Routes>
    </Router>
    
    
    
    
    
  );
}

export default App;

