import "../pages/freshFlowers.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


import snowfall from "../assets/snowfall.png";
import dawn from "../assets/dawn.png";
import pink from "../assets/pink-elegance.png";
import rustic from "../assets/rustic.png";
import symphony from "../assets/symphony.png";
import rosy from "../assets/rosy.png";

import majesty from "../assets/majesty.png";
import blossom from "../assets/blossoms.png";



const FreshFlowers = () => {
    return (
        <div>
            <Navbar />
            
            
            <div id="freshers">
                <div className="booq">
                    <div className="flower">
                        <p className="flowers">Fresh Flowers</p>
                    </div>
                </div>
                <div className="snow">
                    <img className="snows" src={snowfall} alt={snowfall}></img>
                    <img className="snows" src={dawn} alt={dawn}></img>
                    <img className="snows" src={pink} alt={pink}></img>
                    <img className="snows" src={rustic} alt={rustic}></img>
                    <img className="snows" src={symphony} alt={symphony}></img>
                    <img className="snows" src={rosy} alt={rosy}></img>
                    <img className="snows" src={majesty} alt={majesty}></img>
                    <img className="snows" src={blossom} alt={blossom}></img>
                </div>
            </div>
            <Footer />
            
        </div>
      );
}
 
export default FreshFlowers;