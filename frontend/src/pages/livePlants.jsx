import Navbar from "../components/navbar";
import Footer from "../components/footer";
import flower from "../assets/flower-aura.jpg";
import bloom from "../assets/bloom.jpg";
import lavender from "../assets/lavender.jpg";
import lives from "../assets/live-rose.jpg";
import meadow from "../assets/meadow.jpg";
import morning from "../assets/morning-dew.jpg";
import red from "../assets/red-rose.jpg";
import spring from "../assets/spring.jpg";
import white from "../assets/white-rose.jpg";
import "../pages/livePlants.css";

const LivePlants = () => {
    return (
        <div>
            <Navbar />
            <div className="freshners">
                            <div className="live">
                                <div className="lives">
                                    <p className="flowers">Live Plants</p>
                                </div>
                            </div>
                            <div className="snow">
                                <img className="snowie" src={flower} alt={flower}></img>
                                <img className="snowie" src={bloom} alt={bloom}></img>
                                <img className="snowie" src={lavender} alt={lavender}></img>
                                <img className="snowie" src={lives} alt={lives}></img>
                                <img className="snowie" src={meadow} alt={meadow}></img>
                                <img className="snowie" src={morning} alt={morning}></img>
                                <img className="snowie" src={red} alt={red}></img>
                                <img className="snowie" src={spring} alt={spring}></img>
                                <img className="snowie" src={white} alt={white}></img>
                                <img className="snowie" src={flower} alt={flower}></img>
                            </div>
                        </div>
            <Footer />
        </div>
      );
}
 
export default LivePlants;