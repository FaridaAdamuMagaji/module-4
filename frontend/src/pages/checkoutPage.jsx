import Navbar from "../components/navbar";
import Footer from "../components/footer";
/*
const CheckoutPage = () => {
    return (
        <div>
            <Navbar />
            <Footer />
        </div>
    );
}

export default CheckoutPage;*/
import React, { useState } from "react";
import "./checkoutPage.css";
import snow from "../assets/snowfall.png";
import lock from "../assets/lock.png";
/*
const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 100; // Product price
  const subtotal = price * quantity;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <div>
        <Navbar />
        <div className="checkout-wrapper">
      <div className="checkout-box">
        <img src={snow} alt="Snowfall" className="checkout-image" />
        <div className="product-header">
          <h3 className="product-name">Snowfall</h3>
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
        
        {/* Quantity 
        <div className="quantity-section">
          <span>Quantity ({quantity})</span>
        </div>

        <hr className="divider" />

        {/* Subtotal 
        <div className="row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping 
        <div className="row">
          <span>Shipping</span>
          <span className="muted">Calculated at next step</span>
        </div>

        <hr className="divider" />

        
        <div className="row total">
          <strong>Total</strong>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>

        
        <button className="checkout-btn">
          Secure Checkout <span className="lock"><img id="lock" src={lock} alt={lock}></img></span>
        </button>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default CheckoutPage;*/
import "./checkoutPage.css";

const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 100;
  const subtotal = price * quantity;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <div>
        <Navbar />
        <div className="checkout-container">
      <div className="checkout-card">
        {/* Product row */}
        <div className="product-row">
          <img src={snow} alt="Snowfall" className="product-image" />
          <div className="product-info">
            <div className="rows">
                <div className="product-name">Snowfall</div>
            <div className="product-price">${price.toFixed(2)}</div>
            </div>
            
            <p className="quantity-text">Quantity ({quantity})</p>
          </div>
        </div>

        <hr className="divider" />

        {/* Subtotal */}
        <div className="row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="row">
          <span>Shipping</span>
          <span className="muted">Calculated at next step</span>
        </div>

        <hr className="divider" />

        {/* Total */}
        <div className="row total">
          <strong>Total</strong>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>

        {/* Checkout button */}
        <button className="checkout-btn">
          Secure Checkout <span className="lock"><img id="lock" src={lock} alt={lock}></img></span>
        </button>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default CheckoutPage;

