import { useEffect, useState } from "react";

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
      <h1><p>Admin Panel</p></h1>
      
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
                marginBottom: "15px",
                background: "#f9f9f9"
              }}
            >
              {flower.image && (
                <img 
                  src={`https://flowerrs.onrender.com${flower.image}`} 
                  alt={flower.name} 
                  style={{ width: "200px", borderRadius: "8px", marginLeft: "20px" }}
                />
              )}
              <div style={{ flex: 1 }}>
                <h3>Name: {flower.name}</h3>
                <p>Category: {flower.category}</p>
                <p>Price: ${flower.price}</p>
                <p>Description: {flower.description}</p>
              </div>
              
            </li>
          ))}
        </ul>
      )}
      <p>Flower Delivery Website</p><br></br>
      <p>Created for ELEVATEHer innovation space LTD</p><br></br>
      <p>BY</p><br></br>
      <p>FARIDA ADAMU MAGAJI</p>
    </div>
  );
}

export default Flowers;
