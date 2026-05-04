import React, { useState } from "react";

const SigninPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup successful!");
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      {/* Normal Signup Page */}
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Create an Account</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 bg-white p-6 rounded-2xl shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-md p-2 mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-md p-2 mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border rounded-md p-2 mb-4"
          required
        />
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg"
        >
          Sign Up
        </button>
      </form>

      {/* Button to open popup */}
      <button
        onClick={() => setShowPopup(true)}
        className="mt-6 text-pink-700 underline hover:text-pink-800"
      >
        Open Signup Popup
      </button>

      {/* Signup Popup (Modal) */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md p-2 mb-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-2 mb-3"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-md p-2 mb-4"
                required
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SigninPage;
