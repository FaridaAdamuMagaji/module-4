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

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="kyiv"> 
        <h1>Kyiv<span className="luxe">LuxeBouquets</span> </h1>
        <p className="discover">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
      </div>
      <hr></hr>
      <div id="flows">
        <img src={vase} alt="vase"></img>
        <p id="experience">Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
      </div>
      <hr></hr>
      <div id="flow">
        <div>
          <p>Fresh Flowers</p>
          <a>Shop now</a>
          <img src={arrow} alt="arrow"></img>
        </div>
        <div>
          <img className="fresh" src={fresh} alt="flower"></img>
        </div>
      </div>
      <div id="flows">
        <div>
          <img src={dried}></img>
        </div>
        <div>
          <p>Dried Flowers</p>
          <a>Shop now</a>
          <img src={left} alt="arrow"></img>
        </div>
      </div>
      <div id="flows">
        <div>
          <p>Live Plants</p>
          <a>Shop now</a>
          <img src={arrow} alt="arrow"></img>
        </div>
        <div>
          <img src={live} alt="plant"></img>
        </div>
      </div>
      <div id="flows">
        <div>
          <img src={aroma} alt="candel"></img>
        </div>
        <div>
          <p>Dried Flowers</p>
          <a>Shop now</a>
          <img src={left} alt="arrow"></img>
        </div>
      </div>
      <div id="flows">
        <div>
          <p>Freshners</p>
          <a>Shop now</a>
          <img src={arrow} alt="arrow"></img>
        </div>
        <div>
          <img src={freshner} alt="freshner"></img>
        </div>
      </div>
      <h2>About us</h2>
      <hr></hr>
      <div>
        <p>OUR STORY</p>
        <p>Kyiv LuxeBouquets</p>
        <p>
          We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
        </p>
        <button>LERN MORE</button>
      </div>
      <hr></hr>
      <h2>Why choose us ?</h2>
      <hr></hr>
      <div>
        <p>Stylish bouquets by florists</p>
        <p>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
        <hr></hr>
      </div>
      <div>
        <p>On-time delivery</p>
        <p>Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
        <hr></hr>
      </div>
      <div>
        <p>Safe payment</p>
        <p>You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
        <hr></hr>
      </div>
      <div>
        <p>Subscription by your needs</p>
        <p>With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</p>
        <hr></hr>
      </div>
      <div>
        <img id="lux" src={luxe} alt="shop"></img>
      </div>
      <div>
        <p>Follow us</p>
        <div></div>
      </div>
      
      

      
      
    </div>
  );
}
export default Home;
