import React from "react";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:9000/auth/login", {
        email,
        matKhau,
      })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('id',res.data.user._id);
        window.localStorage.setItem("user", res.data.user.email);
        setRedirect(true);
      });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>T2H </h1>
          <h4>Welcome to T2H SHOP</h4>
          <Form onSubmit={onFormSubmit} className="my-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="username"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Control
                type="password"
                name="matKhau"
                value={matKhau}
                onChange={(e) => setMatKhau(e.target.value)}
                placeholder="password"
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
          <p>
            Don't have an account?
            <Link to="/register">
              <Button variant="info" size="sm" className="ml-2">
                Register
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
