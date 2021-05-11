import React from "react";
import "../../src/App.css";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navigation from "./Navbar";
import mainpage from "../img/mainpage.svg";

export default function Help() {
  return (
    <div className="container">
      <h2 className='heading'>Ask your doubts here</h2>
    </div>
  );
}
