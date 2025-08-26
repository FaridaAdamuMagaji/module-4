import { useState } from "react";

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
      <h1>Add a Flower</h1>
      <form onSubmit={handleSubmit}>
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

export default AddFlower;
