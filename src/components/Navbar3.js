import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../../src/App.css";

function Navigation3() {
  const [msg, setmsg] = useState("");

  // const { currentUser, logout } = useAuth();
  // const [error, setError] = useState("");
  // const history = useHistory();

  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await logout();
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }
  // const emailRef = useRef()
  // const { resetPassword, currentUser } = useAuth()
  // const [error, setError] = useState('')
  // const [message, setMessage] = useState('')
  // const [loading, setLoading] = useState(false)
  // const history = useHistory()

  // async function handleSubmit(e) {
  //     e.preventDefault()

  //     try {
  //         setMessage('')
  //         setError('')
  //         setLoading(true)
  //         await resetPassword(emailRef.current.value)
  //         setMessage('Check your inbox for further instructions')
  //         //history.push('/dashboard')
  //     } catch {
  //         console.log(error)
  //         setError('Failed to reset the password')
  //     }

  //     setLoading(false)

  // }

  return (
    <>
      <Navbar variant="light" className="navbarcss">
        <a href="/" className="brand">
          EduLearn
        </a>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          {/* <Nav.Link href="/help">Help</Nav.Link> */}
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation3;

// data = {"VALUE":[79965349,
//   52247194,
//   143446751,
//   194678214,
//   514880654,
//   4216059,
//   85222939,
//   375710645,
//   209458908,
//   3185734,
//   46021906,
//   90622168,
//   189185346,
//   278514796,
//   52582057,
//   524886664,
//   979698596,]};
//   index = ["AUS","CAN","JPN","KOR","MEX","NZL","TUR","USA","CHN","EGY","IND","PAK","RUS","SAU","THA","ZMB","EU28"]