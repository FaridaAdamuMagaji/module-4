import React from "react";

import shop from "../assets/shopping-bag.png"
import menu from "../assets/menu.png"

const Navbar = () => {
    return (
        <nav>
            <div className="top">
                <img id="menu" src={menu} alt="menu"></img>
                <img id="shop" src={shop} alt="shop"></img>
            </div>
        </nav>
        );
}

export default Navbar;