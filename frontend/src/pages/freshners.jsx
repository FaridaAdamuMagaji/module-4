import Navbar from "../components/navbar";
import Footer from "../components/footer";
import aroma from "../assets/aromatic.jpg";
import boujee from "../assets/boujee.jpg";
import deluxe from "../assets/deluxe.jpg";
import elegance from "../assets/elegance.jpg";
import fantasia from "../assets/fantasia.jpg";
import florence from "../assets/florence.jpg";
import pink from "../assets/pink-peonies.jpg";
import posy from "../assets/posy.jpg";
import summer from "../assets/summer.jpg";
import yellow from "../assets/yellow-rose.jpg";


const Freshners = () => {
    return (
        <div>
            <Navbar />
            <div className="freshners">
                <div className="dry">
                    <div className="frys">
                        <p className="flowers">Live Plants</p>
                    </div>
                </div>
                        <div className="snow">
                        <img className="snowie" src={aroma} alt={aroma}></img>
                        <img className="snowie" src={boujee} alt={boujee}></img>
                        <img className="snowie" src={deluxe} alt={deluxe}></img>
                        <img className="snowie" src={elegance} alt={elegance}></img>
                        <img className="snowie" src={fantasia} alt={fantasia}></img>
                        <img className="snowie" src={florence} alt={florence}></img>
                        <img className="snowie" src={pink} alt={pink}></img>
                        <img className="snowie" src={posy} alt={posy}></img>
                        <img className="snowie" src={summer} alt={summer}></img>
                        <img className="snowie" src={yellow} alt={yellow}></img>
                    </div>
                </div>
            <Footer />
        </div>
    );
}
 
export default Freshners;