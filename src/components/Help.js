import React from "react";
import "../../src/App.css";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navigation from "./Navbar";
import mainpage from "../img/mainpage.svg";

export default function Help() {
  const { currentUser } = useAuth();

  function postComment() {
    setTimeout(() => {
      var comment = document.getElementById("comment-text").value;
      document.getElementById("comment-text").value = "";
      var div = document.createElement("div");
      div.className =
        "comment mb-4 text-justify animate__animated animate__fadeIn";
      var name = document.createElement("H4");
      name.innerHTML = currentUser.email;
      name.className = "mb-4 pb-0";
      var para = document.createElement("P");
      para.innerHTML = comment;
      div.appendChild(name);
      div.appendChild(para);
      document.getElementById("comments-box").appendChild(div);
      console.log("Comment posted successfully");
    }, 3000);
  }
  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row">
        <div className="col-sm-5 col-md-6 col-12 pb-4" id="comments-box">
          <h1> Comments</h1>
          <div className="comment mb-4 text-justify">
            <h4>Aakar Gupta</h4> <br />
            <p className="pt-4 pb-0">
              This site is perfect and doesn't have any issues. Thank you for
              creating this amazing website.
            </p>
          </div>
          <div className="comment mb-4 text-justify">
            <h4>Ishi Yadav</h4> <br />
            <p className="pt-4 pb-0">
              I can't access the notes. Please hellpppppp. I am very strestt.
            </p>
          </div>
          <div className="comment mb-4 text-justify float-left">
            <h4>Keet</h4>
            <br />
            <p className="pt-4 pb-0">
              I have a problem with accessing the video of the course in course
              page.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
          <form id="algin-form">
            <div className="form-group">
              <h4>Leave a comment</h4> <label for="message">Message</label>{" "}
              <textarea
                name="msg"
                id="comment-text"
                msg
                cols="30"
                rows="5"
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group">
              {" "}
              <button
                type="button"
                id="post"
                className="btn"
                onClick={postComment}
              >
                Post Comment
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
