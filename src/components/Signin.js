import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import loginpage from "../img/loginpage.svg";
import Navigation3 from "./Navbar3";

function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      console.log(error);
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <Navigation3 />
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="text-centre mb-4 heading">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <button disabled={loading} className="btnsubmit" type="submit">
              Sign In
            </button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgotpassword">Forgot the password?</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">SignUp</Link>
          </div>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img src={loginpage} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
