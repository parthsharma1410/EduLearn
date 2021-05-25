import React from "react";
import "../../src/App.css";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navigation from "./Navbar";
import mainpage from "../img/mainpage.svg";
import loginpage from "../img/loginpage.svg";
import signuppage from "../img/signuppage.svg";

export default function About() {
  return (
    <div className="container">
      <Navigation />
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="heading">This is EduLearn!</h2>
          <p className="para">
            Students can now get access to, <br />
            interactive video lectures and the best theory notes <br />
            on the internet on one single platform!<br />
          </p>
          <img src={loginpage} className="aboutimg2"/>
          <h2 className="heading">Save your precious time</h2>
          <p className="para">
            No need to jump from one application to another, <br />
            because here at EduLearn, you can find every required learning material, <br />
            for the subject of your choice, in seconds, that too all on one single platform!<br />
          </p>
        </div>
        <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s">
          <img src={mainpage} className="aboutimg"/>
          <h2 className="heading">Reduce distractions</h2>
          <p className="para">
            According to a study, <br />
            students studying from online resources tend to get distracted <br />
            easily while surfing through different platforms, switching from theory notes to<br />
            video lectures, by various other media present online.<br />
            Well, this can be greatly reduced by our product EduLearn where learners can get all sorts of <br />
            resources required to study at one single place!
          </p>
          <img src={signuppage} className="aboutimg"/>
        </div>
      </div>
    </div>
  );
}
