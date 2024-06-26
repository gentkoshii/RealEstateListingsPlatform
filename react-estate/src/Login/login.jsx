import React, { useState } from "react";
import Navbar from "../Components/navbar/navbar";
import HomeFooter from "../Components/homeFooter";
import "./login.scss";
import axios from "axios";

function Login() {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend endpoint
      const response = await axios.post("/login", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login">
      <Navbar />
      <div className="loginSetup">
        <form onSubmit={handleSubmit}>
          <h2>Log Into Real Estate</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" id="loginButton" value="Log In" />
          <a href="signup">Don't Have An Account ?</a>
        </form>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Login;
