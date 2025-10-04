import insta from "../assets/insta.png";
import pint from "../assets/pinterest.png";
import face from "../assets/facebook.png";
import tweet from "../assets/twitter.png";
import tele from "../assets/telegram.png";



const Footer = () => {
    return (
        <div>
            <p>Contact Us</p>
            <p>Address <br></br> 15/4 Khreshchatyk Street, Kyiv <br></br><span>Phone</span> <br></br><span>+380980099777<br></br>General inquiry<br></br> Kiev.Florist.Studio@gmail.com</span></p>
            <p>Foolow Us</p>
            <div>
                <img src={insta} alt="insta"></img>
                <img src={pint} alt="pinterest"></img>
                <img src={face} alt="facebook"></img>
                <img src={tweet} alt="twitter"></img>
                <img src={tele} alt="telegram"></img>
            </div>
            <div>
                <p>Shop</p>
                <ul>
                    <li>All Products</li>
                    <li>Fresh Flowers</li>
                    <li>Dried Flowers</li>
                    <li>Live Plants</li>
                    <li>Designer Vases</li>
                    <li>Aroma Candles</li>
                    <li>Freshner Diffuser</li>
                    <li>Service</li>
                    <li>Flower Subscription</li>
                    <li>Wedding and event decor</li>
                    <hr></hr>
                    <li>About Us</li>
                    <li>Our story</li>
                    <li>Blog</li>
                    <br></br>
                    <li>Shippping & Return</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        );
}
 
export default Footer;