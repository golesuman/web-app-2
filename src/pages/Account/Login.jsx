import axios from "axios";
import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("token/", {
        username,
        password,
      });
      console.log(response);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data["access"]}`;

      const { access, refresh } = response.data;

      // // Store the tokens in local storage
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      // Redirect to protected route
      // Replace '/dashboard' with your desired protected route
      // window.location.href = "/cart";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
