
import { Link } from "react-router-dom";

import SigninPage from "../pages/signinpage";
import React, { useState, useEffect } from "react";
import shop from "../assets/shopping-bag.png";
import menu from "../assets/menu.png";
import insta from "../assets/insta.png";
import pint from "../assets/pinterest.png";
import face from "../assets/facebook.png";
import tweet from "../assets/twitter.png";
import tele from "../assets/telegram.png";
import close from "../assets/close-button.png";
import rosy from "../assets/rosy.png";

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
        document.body.classList.remove("blur-active");
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
              <div id="close">
                <img src={close} alt={close}></img>
              </div>
              
              
          <ul className="sign">
            <Link to="/signinPage"><li className="men">Sign in</li></Link></ul>
            <li className="men">Shop</li>
            <li className="men">Service</li>
            <li className="men">Contact</li>
            <li className="men">About us</li>
            <Link to="/productPage"><li className="men">Cart</li></Link>
          <div id="return">
          <li id="returns">Shipping & Returns</li>
          <li id="returns">Terms &Conditions</li>
          <li id="returns">Privacy policy</li>
          </div>
          <div>
            <img id="menus" src={insta} alt={insta}></img>
            <img id="menus" src={pint} alt={pint}></img>
            <img id="menus" src={face} alt={face}></img>
            <img id="menus" src={tweet} alt={tweet}></img>
            <img id="menus" src={tele} alt={tele}></img>
          </div>
          
        </ul>
        
            
          )}
           <ul className="lists">
          <li className="sign">Sign</li>
          <Link to="/productPage">Cart</Link>
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
            
            <div className="shoplist">
              <div>
                <img src={close} alt={close}></img>
                <img id="ros" src={rosy} alt={rosy}></img>
              </div>
              
              
        </div>
          )}
          <ul className="lists">
            <img src={close} alt={close}></img>
          
        </ul>
        </div>

        {/* Right-side links */}
        
      </div>
    </nav>
  );
};

export default Navbar;
