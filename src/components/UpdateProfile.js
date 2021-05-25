import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import Navigation2 from "./Navbar2";
import loginpage from "../img/loginpage.svg";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setError("");
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update Account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="container animate__animated animate__fadeIn">
      <Navigation2 />
      <div className='flexbox'>
        <div>

      <h2 className="text-centre mb-4 heading">Update Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          ></Form.Control>
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef}></Form.Control>
        </Form.Group>
        <Form.Group id="password-confirmation">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" ref={passwordConfirmRef}></Form.Control>
        </Form.Group>
        <button disabled={loading} className="btnsubmit" type="submit">
          Save Changes
        </button>
      </Form>
      <div className="w-100 text-center mt-2">
        To cancel making changes <Link to="/dashboard">Cick here</Link>
      </div>
        </div>
      <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img src={loginpage} />
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
