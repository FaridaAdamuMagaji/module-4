
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


import React, { useState, useEffect } from "react";
import shop from "../assets/shopping-bag.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [showMenuList, setShowMenuList] = useState(false);
  const [showShopList, setShowShopList] = useState(false);

  // Handle menu image click
  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenuList(true);
    setShowShopList(false); // hide shop list if open
  };

  // Handle shop image click
  const handleShopClick = (e) => {
    e.stopPropagation();
    setShowShopList(true);
    setShowMenuList(false); // hide menu list if open
  };

  // Hide lists when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => {
      setShowMenuList(false);
      setShowShopList(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="top">
        {/* Menu image + list */}
        <div className="menu-section">
          {!showMenuList && (
            <img
              id="menu"
              src={menu}
              alt="menu"
              className="icon"
              onClick={handleMenuClick}
            />
          )}
          {showMenuList && (
            <ul className="list">
          <li className="sign">
            <Link to="/Sign">Sign</Link></li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
        
            
          )}
           <ul className="lists">
          <li className="sign">Sign</li>
          <li>Cart</li>
        </ul>
        </div>

        {/* Sign and Cart */}
        

        {/* Shop image + list */}
        <div className="shop-section">
          {!showShopList && (
            <img
              id="shop"
              src={shop}
              alt="shop"
              className="icon"
              onClick={handleShopClick}
            />
          )}
          {showShopList && (
            <ul className="list">
          <li className="sign">Shop</li>
          <li>Contact</li>
        </ul>
          )}
          <ul className="lists">
          <li className="signs">Shop</li>
          <li>Contact</li>
        </ul>
        </div>

        {/* Right-side links */}
        
      </div>
    </nav>
  );
};

export default Navbar;
