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
            <div>
                <p id="ours">Our Story</p>
                <p id="outs">About</p>
                <p>kkyiv LuxeBouquets</p>
                <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                <div>
                    <img src={insta} alt={insta}></img>
                    <img src={pint} alt={pint}></img>
                    <img src={face} alt={face}></img>
                    <img src={tweet} alt={tweet}></img>
                    <img src={tele} alt={tele}></img>
                </div>
                <div>
                    <img src={founder} alt={founder}></img>
                </div>
            </div>
            <div>
                <p>Our Founders Passion </p>
                <p>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
            </div>
            <div>
                <img src={craft} alt={craft}></img>
                <div>
                    <p>Expertly Crafted Bouquets</p>
                    <p>At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                </div>
            </div>
            <div>
                <img src={gift} alt={gift}></img>
                <div>
                    <p>Bouquets, Gifts & Ambiance</p>
                    <p>In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.</p>
                </div>
            </div>
            <div>
                <img src={heel} alt={heel}></img>
                <div>
                    <p>Making Every Day Special</p>
                    <p>Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.</p>
                </div>
            </div>
            <div>
                <p>Discover Our Beautiful Bouquets</p>
                <p>Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
                <button>SHOP NOW</button>
            </div>
            <Footer />
        </div>
    );
}
 
export default AboutPage;