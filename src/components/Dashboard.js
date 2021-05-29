import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import clock from "../img/clock.svg";
import CourseCard from "./CourseCard";
import Navigation2 from "./Navbar2";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="container animate__animated animate__fadeIn">
      <Navigation2 />
       <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          {error && <Alert variant="danger">{error}</Alert>}
          Welcome to EduLearn <strong>{currentUser.email}</strong> !
        </div>
        <div className="w-50 text-center mt-2">
        <button className="btnsubmit2">
            <a href="/updateprofile">Update Profile</a>
          </button>
          <br /><br />
          </div>
        {/* <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s imgclock">
          <img src={clock} />
        </div> */}
      </div>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Enter a topic"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btnsearch">
          Search
        </button>
      </div>
      <br />
      <div className="courses container">
        <h4 className='heading2'>Suggested Courses</h4>
        <div className="flexbox">
          <CourseCard course={0} />
          <CourseCard course={1} />
          <CourseCard course={2} />
        </div>
        <div className="flexbox">
          <CourseCard course={3} />
          <CourseCard course={4} />
          <CourseCard course={5} />
        </div>
      </div>
     </div>
  );
}
