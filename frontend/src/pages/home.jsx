import Navbar from "../components/navbar";
import vase from "../assets/flower-vase.png";
import arrow from "../assets/arrow.png";
import left from "../assets/arrow-left.png";
import fresh from "../assets/fresh-flower.png";
import dried from "../assets/dried-flower.png";
import aroma from "../assets/aroma-candels.png";
import live from "../assets/live-plant.png";
import freshner from "../assets/freshner.png";
import luxe from "../assets/luxe-shop.png";
import insta from "../assets/insta.png";
import face from "../assets/facebook.png";
import pint from "../assets/pinterest.png";
import tweet from "../assets/twitter.png";
import tele from "../assets/telegram.png";
import call from "../assets/call.png";
import pin from "../assets/location.png";
import serve from "../assets/service.png";
import google from "../assets/google-logo.png";
import Footer from "../components/footer";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="kyiv"> 
        <h1>Kyiv
          <br></br>
          <span className="luxe">LuxeBouquets</span> </h1>
        <p className="discover">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
        <hr></hr>
      </div>
      <div id="flowy">
        <img id="vase" src={vase} alt="vase"></img>
        <p id="experience">Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
      </div>
      <div id="flow">
        <div className="left">
          <p className="box">Fresh Flowers</p>
          <a className="now">Shop now</a>
          <img src={arrow} alt="arrow"></img>
        </div>
        <img className="fresh" src={fresh} alt="flower"></img>
      </div>
      <div id="flows">
        <img id="dried" src={dried} alt="dried"></img>
        <div className="right">
          <p className="boxes">Dried Flowers</p>
          <img src={left} alt="arrow"></img>
          <a className="nows">Shop now</a>
          
        </div>
      </div>
      <div id="flows">
        <div className="left">
          <p className="box">Live Plants</p>
          <a className="now">Shop now</a>
          <img src={arrow} alt="arrow"></img>
        </div>
        <img className="fresh" src={live} alt="plant"></img>
      </div>
      <div id="flows">
        <img id="dried" src={aroma} alt="candel"></img>
        <div className="right">
          <p className="boxes">Aroma Candels</p>
          <img src={left} alt="arrow"></img>
          <a className="nows">Shop now</a>
          
        </div>
      </div>
      <div id="flows">
        <div className="left">
          <p className="box">Freshners</p>
          <a className="now">Shop now</a>
          <img src={arrow} alt="arrow"></img>
        </div>
        <img className="fresh" src={freshner} alt="freshner"></img>
      </div>
      <h2>About us</h2>
      <div className="stories">
        <p className="story">OUR STORY</p>
        <p className="style">Kyiv LuxeBouquets</p>
        <p className="at">
          We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
        </p>
        <button className="lern">LERN MORE</button>
      </div>
      <p className="why">Why choose us ?</p>
      <div className="stories">
        <p className="style">Stylish bouquets by florists</p>
        <p className="at">At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
      </div>
      <div className="stories">
        <p className="style">On-time delivery</p>
        <p className="at">Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
      </div>
      <div className="stories">
        <p className="style">Safe payment</p>
        <p className="at">You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
      </div>
      <div className="stories">
        <p className="style">Subscription by your needs</p>
        <p className="at">With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</p>
      </div>
      <div>
        <img id="lux" src={luxe} alt="shop"></img>
      </div>
      <div>
        <p className="follow">Follow us</p>
        <div className="social">
          <img src={insta} alt={insta}></img>
          <img src={pint} alt="pintyerest"></img>
          <img src={face} alt="facebook"></img>
          <img src={tweet} alt="twitter"></img>
          <img src={tele} alt="telegram"></img>
        </div>
      </div>
      <hr></hr>
      <div className="contact">
        <p className="to">To Contact Us</p>
        <p className="call">We will call you back</p>
        <input className="input" type="text" value="+380 xx xxx xx xx"></input>
        <div><button className="book">BOOK A CALL</button></div>
        
      </div>
      <hr></hr>
      <div>
        <p className="phone">Phone</p>
      <hr></hr>
      </div>
      <div className="number">
        <img className="boot" src={call} alt="call"></img>
        <p>+380980099777</p>
      </div>
      <div className="number">
        <img className="boot" src={call} alt="call"></img>
        <p>+380980099111</p>
      </div>
      <hr></hr>
      <div>
        <div className="phone">
          Address
        </div>
        <hr></hr>
        <div className="opens">
          <p className="open">OPENING HOURS 8 TO 11 P.M.</p>
          <div className="location">
            <img id="pin" src={pin} alt="pin"></img>
            <p className="five">15/4 Khreshchatyk Street, Kyiv </p>
          </div>
        </div>
        <hr></hr>
        <div>
          <p className="phone">Our service</p>
          <img id="lux" src={serve} alt="serve"></img>
        </div>
        <div className="service">
          <p className="serv">SERVICE</p>
          <p className="subs">Flower Subscriptions</p>
          <p className="convenience">Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
          <button className="subscribe">SUBSCRIBE NOW</button>
        </div>
      </div>
      <div id="decorate">
        <p className="vice">SERVICE</p>
        <p className="wed">Wedding & event decor</p>
        <p className="vices">Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
        <p className="inquire">INQUIRE NOW</p>
      </div>
      <div className="check">
        <img src={google} alt="google"></img>
        <p className="review">REVIEWS</p>
        <p className="client">Our Clients say</p>
        <p className="order">“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”<span id="rich">~Ronald Richards</span></p>
        <button className="read">READ REVIEWS</button>
        <hr></hr>
      </div>
      <div>
        <p className="remember">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... <span id="rich">Reminds you 7 days before. No spam or sharing your address</span></p>
        <input className="inputs" type="text" value="Your Email"></input>
        <button className="books">REMIND</button>
      </div>
      <Footer />
      

      
      

      
      
    </div>
  );
}
export default Home;
