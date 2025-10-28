import Navbar from "../components/navbar";
import Footer from "../components/footer";
import delight from "../assets/delight.png";
import grape from "../assets/grape.png";
import cedar from "../assets/cedar.png";
import lime from "../assets/lime.png";
import mist from "../assets/mist.png";

import "../pages/productPage.css";

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <div className="del">
                <img className="delight" src={delight} alt={delight}></img>
                <div className="order">
                    <p className="quick">BOUQUETS FRESH FLOWERS / QUICK ORDER</p>
                    <p className="hundred">Rosy Delight -$100</p>
                    <p className="large">Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p>
                    <div>Quantity
                        <button>-1+</button></div>
                    <button className="basket">ADD TO BASKET</button>
                </div>
            </div>
            <div className="may">You may also like..</div>
            
            <div className="grape">
                <img className="cedar" src={grape} alt={grape}></img>
                <img className="cedars" src={cedar} alt={cedar}></img>
                <img className="cedars" src={lime} alt={lime}></img>
                <img className="cedart" src={mist} alt={mist}></img>
            </div>
            <Footer />
        </div>
    );
}
 
export default ProductPage;