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

const LivePlants = () => {
    return (
        <div>
            <Navbar />
            <div className="freshners">
                            <div className="dry">
                                <div className="drys">
                                    <p className="flowers">Dried Flowers</p>
                                </div>
                            </div>
                            <div className="snow">
                                <img className="snowie" src={flower} alt={flower}></img>
                                <img className="snowie" src={bloom} alt={classicdried}></img>
                                <img className="snowie" src={lavender} alt={eternal}></img>
                                <img className="snowie" src={lives} alt={everlasting}></img>
                                <img className="snowie" src={meadow} alt={jewel}></img>
                                <img className="snowie" src={morning} alt={ornate}></img>
                                <img className="snowie" src={red} alt={pinkdried}></img>
                                <img className="snowie" src={spring} alt={rusticdried}></img>
                                <img className="snowie" src={white} alt={victoria}></img>
                                <img className="snowie" src={flower} alt={wild}></img>
                            </div>
                        </div>
            <Footer />
        </div>
      );
}
 
export default LivePlants;