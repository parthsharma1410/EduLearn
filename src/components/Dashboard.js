import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import clock from "../img/clock.svg";
import CourseCard from "./CourseCard";

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
    <div className="container">
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-primary">
          search
        </button>
      </div>
      <div className="courses container">
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
      <div className="flexbox">
        <div className="textcolumn animate__animated animate__fadeIn">
          <h2 className="text-center mb-4 heading">Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          Welcome to EduLearn <strong>{currentUser.email}</strong> ! <br /> We
          are still building the dashboard, <br /> Please visit us later :)
          <br /> <br />
          <button className="btnsubmit">
            <a href="/updateprofile">Update Profile</a>
          </button>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
        {/* <div className="imagecolumn animate__animated animate__fadeIn animate__delay-1s imgclock">
          <img src={clock} />
        </div> */}
      </div>
    </div>
  );
}
