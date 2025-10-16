import insta from "../assets/insta.png";
import pint from "../assets/pinterest.png";
import face from "../assets/facebook.png";
import tweet from "../assets/twitter.png";
import tele from "../assets/telegram.png";



const Footer = () => {
    return (
        <div>
            <div className="end">
                <p className="us">Contact Us</p>
                <p className="add">Address<span className="street">15/4 Khreshchatyk Street, Kyiv </span> <br></br><span className="add">Phone</span> <br></br><span className="street">+380980099777</span><br></br><span className="add">General inquiry</span><br></br> <span className="street">Kiev.Florist.Studio@gmail.com</span></p>
                <p className="us">Follow Us</p>
            </div>
            
            <div className="social">
                <img src={insta} alt="insta"></img>
                <img src={pint} alt="pinterest"></img>
                <img src={face} alt="facebook"></img>
                <img src={tweet} alt="twitter"></img>
                <img src={tele} alt="telegram"></img>
            </div>
            <hr></hr>
            <div>
                <p className="shops">Shop</p>
                <ul className="all">
                    <li>All Products</li>
                    <li>Fresh Flowers</li>
                    <li>Dried Flowers</li>
                    <li>Live Plants</li>
                    <li>Designer Vases</li>
                    <li>Aroma Candles</li>
                    <li>Freshner Diffuser</li>
                    <p className="shop">Service</p>
                    <li>Flower Subscription</li>
                    <li>Wedding and event decor</li>
                </ul>
                <p className="shoop">About Us</p>
                <ul className="all">
                    <li>Our story</li>
                    <li>Blog</li>
                    <br></br>
                    <li>Shippping & Return</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <br></br>
                </ul>
                
            </div>
        </div>
        );
}
 
export default Footer;