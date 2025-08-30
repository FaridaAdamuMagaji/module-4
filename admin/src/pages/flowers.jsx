import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Flowers() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("https://flowerrs.onrender.com/api/flowers")
      .then(res => res.json())
      .then(data => setFlowers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div className="head">
        <p className="admin">Admin Panel</p>
        <nav id='navig'>
              <Link to="/flowers">
                <button className="flow">Flowers</button>
              </Link>
              <Link to="/add-flower">
                <button className="add">Add Flower</button>
              </Link>
        </nav>
      </div>
      
        <hr></hr>
      {flowers.length === 0 ? (
        <p>No flowers added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {flowers.map((flower) => (
            <li 
              key={flower._id} 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "35px",
                marginTop: "18px",
                
              }}
            >
              {flower.image && (
                <img 
                  src={`https://flowerrs.onrender.com${flower.image}`} 
                  alt={flower.name} 
                  style={{ width: "200px", marginRight: "15px" }}
                />
              )}
              <div style={{ flex: 1 }}>
                <p><span className="datum">Name:</span> {flower.name}</p> <br></br>
                <p><span className="datum">Category:</span> {flower.category}</p><br></br>
                <p><span className="datum">Price:</span> ${flower.price}</p><br></br>
                <p><span className="datum">Description:</span> {flower.description}</p>
              </div>
              
            </li>
          ))}
        </ul>
      )}
      <div className="end">
        <p>FLOWER DELIVERY APP</p>
        <p>Created for ElevateHER Innovation Space Ltd</p>
        <p>By</p>
        <p>FARIDA ADAMU MAGAJI</p>
      </div>
      
    </div>
  );
}

export default Flowers;
