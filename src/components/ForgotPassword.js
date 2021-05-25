import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import forgotpassword from "../img/forgotpassword.svg";
import Navigation from "./Navbar";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
      //history.push('/dashboard')
    } catch {
      console.log(error);
      setError("Failed to reset the password");
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <Navigation />
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="text-centre mb-4 heading">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <button disabled={loading} className="btnsubmit" type="submit">
              Reset Password
            </button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/signin">Sign In</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">SignUp</Link>
          </div>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img src={forgotpassword} />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
