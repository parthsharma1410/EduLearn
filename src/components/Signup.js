import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import signuppage from "../img/signuppage.svg";
import Navigation3 from "./Navbar3";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      console.log(error);
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="container">
      <Navigation3 />
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="text-centre mb-4 heading">Sign Up</h2>
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
            <Form.Group id="password-confirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <button disabled={loading} className="btnsubmit" type="submit">
              Sign Up
            </button>
          </Form>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/signin">SignIn</Link>
          </div>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img src={signuppage} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
