import React, { useContext, useEffect, useState } from "react";
import "../../src/App.css";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navigation from "./Navbar";
import APIHelper from "../APIHelper"

export default function Help() {
  const { currentUser } = useAuth();
  const email = currentUser.email
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  useEffect(() => {
    const fetchCommentAndSetComments = async () => {
      const comments = await APIHelper.getAllComments()
      console.log(comments)
      setComments(comments)
    }
    fetchCommentAndSetComments()
  }, [])

  const createComment = async e => {
    e.preventDefault()
    if (!comment) {
      alert("please enter something")
      return
    }
    const newComment = await APIHelper.createComment(email, comment)
    setComments([...comments, newComment])
  }

  // function postReply() {
  //   setTimeout(() => {
  //     var comment = document.getElementById("comment-text").value;
  //     document.getElementById("comment-text").value = "";
  //     var div = document.createElement("div");
  //     div.className =
  //       "comment mb-4 text-justify animate__animated animate__fadeIn";
  //     var name = document.createElement("H6");
  //     name.innerHTML = currentUser.email;
  //     name.className = "mb-4 pb-0 text";
  //     var para = document.createElement("P");
  //     para.innerHTML = comment;
  //     div.appendChild(name);
  //     div.appendChild(para);
  //     document.getElementById("reply-here").innerHTML = 'hi';
  //     console.log("Reply posted successfully");
  //   }, 2000);
  // }

  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="unflex">
        <div className="w-100" id="comments-box">


        {comments.map(({ _id, email, comment }, i) => (
        <div className="comment mb-4 text-justify" >
            <h4 className="heading">{comments[i].email}</h4> <br />
            <p className="pt-4 pb-0 text">
            {comments[i].comment}
            </p>
            <div id="reply-here">

            </div>
            <div className="form-group flexbox">
        <input
          id="comment-text"
          type="text"
          cols="90"
          rows="2"
          placeholder='Reply to this user'
          className="form-control"
          // onClick={postReply}
        />
        <button type="button" className="btnsubmit ml-5" onClick={createComment}>
          Add
        </button>
      </div>
          </div>
        ))}

          {/* <div className="comment mb-4 text-justify">
            <h4 className="heading">Aakar Gupta</h4> <br />
            <p className="pt-4 pb-0 text">
              This site is perfect and doesn't have any issues. Thank you for
              creating this amazing website.
            </p>
          </div>
          <div className="comment mb-4 text-justify">
            <h4 className="heading">Ishi Yadav</h4> <br />
            <p className="pt-4 pb-0 text">
              I can't access the notes. Please hellpppppp. I am very strestt. Please hit me up with a solution.
            </p>
          </div>
          <div className="comment mb-4 text-justify float-left">
            <h4 className="heading">Keet</h4>
            <br />
            <p className="pt-4 pb-0 text">
              I have a problem with accessing the video of the course in course
              page.
            </p>
          </div>
          <div className="comment mb-4 text-justify float-left">
            <h4 className="heading">Keet</h4>
            <br />
            <p className="pt-4 pb-0 text">
              I have a problem with accessing the video of the course in course
              page.
            </p>
          </div>
          <div className="comment mb-4 text-justify float-left">
            <h4 className="heading">Keet</h4>
            <br />
            <p className="pt-4 pb-0 text">
              I have a problem with accessing the video of the course in course
              page.
            </p>
          </div>
          <div className="comment mb-4 text-justify float-left">
            <h4 className="heading">Keet</h4>
            <br />
            <p className="pt-4 pb-0 text">
              I have a problem with accessing the video of the course in course
              page.
            </p>
          </div> */}
        </div>
        {/* <div className='algin-form flexbox sticky'>
        <div className="form-group">
        <input
          id="comment-text"
          type="text"
          cols="90"
          rows="2"
          placeholder='What do you want to ask?'
          className="form-control"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
      </div>
      <div>
        <button type="button" className="btnsubmit ml-5" onClick={createComment}>
          Add
        </button>
      </div> */}
        <form id="algin-form">
            <div className="form-group">
            </div>
            <div className="form-group flexbox grey">
              <textarea
               id="comment-text"
              type="text"
              cols="90"
              rows="2"
              placeholder='Ask something...'
              className="form-control"
              value={comment}
              onChange={({ target }) => setComment(target.value)}
              ></textarea>
              <button type="button" className="btnsubmit ml-5" onClick={createComment}>
                Post Comment
              </button>
            </div>
          </form>
        </div>
        </div>
  );
}
