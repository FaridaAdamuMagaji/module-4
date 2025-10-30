import Navbar from "../components/navbar";
import Footer from "../components/footer";
import insta from "../assets/insta.png";
import pint from "../assets/pinterest.png";
import face from "../assets/facebook.png";
import tweet from "../assets/twitter.png";
import tele from "../assets/telegram.png";
import founder from "../assets/founder.png";
import craft from "../assets/craft.png";
import gift from "../assets/gift.png";
import heel from "../assets/heels.png";
import "../pages/aboutPage.css";

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div id="bout">
                <div className="store">
                    <p id="ours">Our Story</p>
                    <p id="outs">About</p>
                    <p className="bee">kyiv LuxeBouquets</p>
                    <p className="any">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                    <div>
                        <img id="round" src={insta} alt={insta}></img>
                        <img id="round" src={pint} alt={pint}></img>
                        <img id="rounds" src={face} alt={face}></img>
                        <img id="round" src={tweet} alt={tweet}></img>
                        <img id="round" src={tele} alt={tele}></img>
                </div>
                
                </div>
                
                <div>
                    <img id="founder" src={founder} alt={founder}></img>
                </div>
            </div>
            <div className="find">
                <p className="found">OUR STORY</p>
                <p className="pass">Our Founders Passion </p>
                <p className="founded">Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
            </div>
            <div className="crafts">
                <img id="craft" src={craft} alt={craft}></img>
                <div className="cent">
                    <p className="crafted">Expertly Crafted Bouquets</p>
                    <p className="pride">At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                </div>
            </div>
            <div>
                <img id="craft" src={gift} alt={gift}></img>
                <div className="cent">
                    <p className="crafted">Bouquets, Gifts & Ambiance</p>
                    <p className="pride">In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.</p>
                </div>
            </div>
            <div>
                <img id="craft" src={heel} alt={heel}></img>
                <div className="cent">
                    <p className="crafted">Making Every Day Special</p>
                    <p className="pride">Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.</p>
                </div>
            </div>
            <div className="cents">
                <p className="beauty">Discover Our Beautiful Bouquets</p>
                <p className="collect">Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
                <button className="know">SHOP NOW</button>
            </div>
            <Footer />
        </div>
    );
}
 
export default AboutPage;