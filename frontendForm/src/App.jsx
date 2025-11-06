import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({});

  //instance of axios
  const baseUrl = axios.create({
    baseURL: "http://localhost:4500/api/v1/auth",
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData);

  const handleSubmit = async (ev) => {

    ev.preventDefault();

    try {
      const response = await baseUrl.post("/user", formData);

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name:</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <label htmlFor="username">Username:</label>
      <br />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Choose a username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
