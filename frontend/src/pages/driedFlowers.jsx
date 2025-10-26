import Navbar from "../components/navbar";
import Footer from "../components/footer";
import boho from "../assets/boho.jpeg";
import classicdried from "../assets/classic-dried.jpg";
import eternal from "../assets/eternal-summer.jpeg";
import everlasting from "../assets/everlasting-dried.jpg";
import jewel from "../assets/jewel-toned.jpeg";
import ornate from "../assets/ornate-dried.jpg";
import pinkdried from "../assets/pink-dried.jpg";
import victoria from "../assets/victoria.jpeg";
import rusticdried from "../assets/rustic-dried.jpg";
import wild from "../assets/wild-north.jpeg";

import "../pages/driedFlowers.css";



const DriedFlowers = () => {
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
                    <img className="snowie" src={boho} alt={boho}></img>
                    <img className="snowie" src={classicdried} alt={classicdried}></img>
                    <img className="snowie" src={eternal} alt={eternal}></img>
                    <img className="snowie" src={everlasting} alt={everlasting}></img>
                    <img className="snowie" src={jewel} alt={jewel}></img>
                    <img className="snowie" src={ornate} alt={ornate}></img>
                    <img className="snowie" src={pinkdried} alt={pinkdried}></img>
                    <img className="snowie" src={rusticdried} alt={rusticdried}></img>
                    <img className="snowie" src={victoria} alt={victoria}></img>
                    <img className="snowie" src={wild} alt={wild}></img>
                </div>
            </div>
            <Footer />
        </div>
      );
}
 
export default DriedFlowers;