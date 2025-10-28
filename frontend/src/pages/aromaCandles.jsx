import Navbar from "../components/navbar";
import Footer from "../components/footer";
import angel from "../assets/angel.jpg";
import coconut from "../assets/coconut.jpg";
import heart from "../assets/heart.jpg";
import luxurious from "../assets/luxurious.jpg";
import luxury from "../assets/luxury.jpg";
import orange from "../assets/orange-blossom.jpg";
import oudh from "../assets/oudh.jpg";
import peony from "../assets/peony-rose.jpg";
import soy from "../assets/soy-wax.jpg";
import winter from "../assets/winterfell.jpg";
import "../pages/aromaCandles.css";

const AromaCandles = () => {
    return (
        <div>
            <Navbar />
            <div className="freshners">
                <div className="dry">
                    <div className="aromas">
                        <p className="flowers">Live Plants</p>
                    </div>
                </div>
                                        <div className="snow">
                                            <img className="snowie" src={angel} alt={angel}></img>
                                            <img className="snowie" src={coconut} alt={coconut}></img>
                                            <img className="snowie" src={heart} alt={heart}></img>
                                            <img className="snowie" src={luxurious} alt={luxurious}></img>
                                            <img className="snowie" src={luxury} alt={luxury}></img>
                                            <img className="snowie" src={orange} alt={orange}></img>
                                            <img className="snowie" src={oudh} alt={oudh}></img>
                                            <img className="snowie" src={peony} alt={peony}></img>
                                            <img className="snowie" src={soy} alt={soy}></img>
                                            <img className="snowie" src={winter} alt={winter}></img>
                                        </div>
                                    </div>
            <Footer />
        </div>
      );
}
 
export default AromaCandles;