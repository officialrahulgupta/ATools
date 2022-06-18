import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Input, Checkbox } from "antd";
import "./App.css";
import axios from "axios";

function App() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  //To focus on the email input tag on the initial render
  const emailRef = React.createRef();
  useEffect(() => {
    emailRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    //axios post request
    axios
      .post("https://reqres.in/api/login/", loginDetails)
      .then((response) => {
        if (response.status === 200)
          alert("Login Successful and your token is " + response.data.token);
      })
      .catch((error) => {
        alert("Please enter a valid email or password");
      });
  };
  return (
    <>
      <div className="container-one">
        <h1>ATools.</h1>
        <div className="inside-container-one">
          <Button className="trial-button" type="primary">
            Start Free Trial
          </Button>
          <Button className="login-button" type="primary">
            Login
          </Button>
        </div>
      </div>
      <div className="container-two">
        <div className="main">
          <h1>Welcome Back</h1>
          <p>Sub-title text goes here</p>
          <form>
            <Input
              ref={emailRef}
              value={loginDetails.email}
              className="email-input"
              type="email"
              placeholder="Email Address*"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
            <Input
              value={loginDetails.password}
              className="password-input"
              type="password"
              placeholder="Password*"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
            <Button
              className="login-button2"
              type="submit"
              onClick={submitHandler}
            >
              Login
            </Button>
          </form>
          <div className="more-text">
            <Checkbox>Remember Password</Checkbox>
            <a href="forgotpassword">Forgot Password?</a>
          </div>
        </div>
        <div className="color"></div>
      </div>
    </>
  );
}

export default App;
