import { useState } from "react";
import { Link } from "react-router-dom";
const API_URL = "https://flower-admin-4l4p.onrender.com";
function AddFlower() {
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("description", formData.description);
    if (image) data.append("image", image);

    try {
      const res = await fetch("https://flowerrs.onrender.com/api/flowers", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
  showPopup("Flower added successfully!", "success");
  setFormData({ name: "", category: "", price: "", description: "" });
  setImage(null);
  setPreview(null);
} else {
  const error = await res.json().catch(() => null);
  console.error("Error response:", error);
  showPopup(error?.message || "Failed to add flower. Try again.", "error");
}

    } catch (err) {
      showPopup("An error occurred.", "error");
    }
  };
  const handleDelete = async () => {
    const flowerId = prompt("Enter the flower ID to delete:");
    if (!flowerId) return;

    if (!window.confirm("Are you sure you want to delete this flower?")) return;

    try {
      const res = await fetch(`${API_URL}/${flowerId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        showPopup("Flower deleted successfully!", "success");
      } else {
        const error = await res.json();
        showPopup(error.message || "Failed to delete flower", "error");
      }
    } catch (err) {
      showPopup("An error occurred.", "error");
    }
  };


  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
  };

  return (
    <div>
      {popup.show && (
        <div
          style={{
            backgroundColor: popup.type === "success" ? "green" : "red",
            color: "white",
            padding: "10px",
            textAlign: "center",
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "8px",
            zIndex: 1000,
          }}
        >
          {popup.message}
        </div>
      )}

      <div className="head">
        <p className="admin">Admin Panel</p>
        <nav id="navig">
          <Link to="/flowers">
            <button className="flow">Flowers</button>
          </Link>
          <Link to="/add-flower">
            <button className="add">Add Flower</button>
          </Link>
        </nav>
      </div>

      <hr />

      <form
        onSubmit={handleSubmit}
        className="add-flower-form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
        }}
      >
        <label className="writes">Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        <label htmlFor="image" style={{ cursor: "pointer" }}>
          <img
            className="upload"
            src="/upload.png"
            alt="Upload"
            width="150"
          />
        </label>
        <label className="write">
          Name
          <br />
          <input
            className="first"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="write">
          Category
          <br />
          <input
            className="cat"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label className="write">
          Price
          <br />
          <input
            className="cat"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label className="write">
          Description
          <br />
          <textarea
            className="crib"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button className="delete"
          type="button"
          onClick={handleDelete}
          >DELETE</button>
        <button className="sub" type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
      <div className="end">
        <p>FLOWER DELIVERY APP</p>
        <p>Created for ElevateHER Innovation Space Ltd</p>
        <p>By</p>
        <p>FARIDA ADAMU MAGAJI</p>
      </div>
    </div>
  );
}

export default AddFlower;

