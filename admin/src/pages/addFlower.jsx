
/*
function AddFlower() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    const res = await fetch("https://flowerrs.onrender.com/api/flowers", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Flower added successfully!");
      setName("");
      setDescription("");
      setImage(null);
    } else {
      alert("Failed to add flower");
    }
  };

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
      
      <form onSubmit={handleSubmit}>
        <input type="file" name="picture" accept="image/*"></input>
        <label>Name</label> <br></br>
        <input
          type="text"
          placeholder="Flower name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Flower description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <button type="submit">Add Flower</button>
      </form>
    </div>
  );
}

export default AddFlower;*/

/*import { useState } from "react";

function AddFlower() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null, // file
  });

  const [preview, setPreview] = useState(null);

  // handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle image input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // preview before upload
    }
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await fetch("https://flowerrs.onrender.com/api/flowers", {
        method: "POST",
        body: data, // FormData includes both text + file
      });

      if (res.ok) {
        alert("Flower added successfully!");
        setFormData({
          name: "",
          category: "",
          price: "",
          description: "",
          image: null,
        });
        setPreview(null);
      } else {
        alert("Failed to add flower.");
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading flower.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2>Add Flower</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Flower Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>

        {/* Custom Image Upload *//*}
        <label
          htmlFor="imageUpload"
          className="cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-6 w-full flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 15a4 4 0 014-4h1m4 0h1a4 4 0 014 4m-6-4V3m0 0l-3 3m3-3l3 3"
            />
          </svg>
          <span>Upload Image</span>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {preview && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Preview:</p>
            <img
              src={preview}
              alt="preview"
              className="w-40 h-40 object-cover rounded-lg border mt-2"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Flower
        </button>
      </form>
    </div>
  );
}

export default AddFlower;*/

/*
import { useState } from "react";

function AddFlower() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

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
      <form className="add-flower-form" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
      {/* Label for image *//*}
      <label className="writes">Image</label>
      {/* Upload illustration (clickable) *//*}
      <label htmlFor="image" style={{ cursor: "pointer" }}>
        <img className="upload"
          src="/upload.png"  // place upload-illustration.png in public/
          alt="Upload"
          width="150"
          
        />
      </label>

      {/* Other inputs *//*}
      <label className="write">
        Name
        <br></br>
        <input className="first" type="text" name="name" />
      </label>

      <label className="write">
        Category
        <br></br>
        <input className="cat" type="text" name="category" />
      </label>
      <label className="write">Price
        <br></br>
        <input className="cat" type="number" name="price" />
      </label>
      <label className="write">
        Description
        <br></br>
        <textarea className="crib" name="description" />
      </label>
      <button className="delete">DELETE</button>

      <button className="sub" type="submit">SUBMIT</button>
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

export default AddFlower;*/


import { useState } from "react";
import { Link } from "react-router-dom";

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

  // handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // handle submit
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
        showPopup("Failed to add flower. Try again.", "error");
      }
    } catch (err) {
      showPopup("An error occurred.", "error");
    }
  };

  // popup handler
  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
  };

  return (
    <div>
      {/* Popup message */}
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
        {/* Label for image */}
        <label className="writes">Image</label>

        {/* hidden input */}
        <input
          type="file"
          id="image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        {/* Upload illustration (clickable) */}
        <label htmlFor="image" style={{ cursor: "pointer" }}>
          <img
            className="upload"
            src={preview || "/upload.png"} // keep upload.png in public/
            alt="Upload"
            width="150"
          />
        </label>

        {/* Other inputs */}
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

        <button className="sub" type="submit">
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

