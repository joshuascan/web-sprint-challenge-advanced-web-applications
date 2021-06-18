import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: "Lambda",
    password: "School",
  });
  const [error, setError] = useState("");
  const { push } = useHistory();
  //replace with error state

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        setError("");
        push("/bubbles");
      })
      .catch((err) => {
        console.log(err);
        setError("Username or Password not valid.");
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChange}
            data-testid="username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
            data-testid="password"
          />
          <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.
