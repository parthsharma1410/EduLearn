import React, { useContext, useEffect, useState } from "react";
import "../../src/App.css";
import { Form, Button, Card, Alert, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navigation4 from "./Navbar4";
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

  const deleteComment = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteComment(id)
      setComments(comments.filter(({ _id: i }) => id !== i))
    } catch (err) {}
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
      <Navigation4 />
      <div className="unflex">

      <div className="form-group">
        <form id="algin-form">
            <div className="form-group flexbox sticky grey">
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

        <div className="w-100" id="comments-box">


        {comments.map(({ _id, email, comment }, i) => (
          <div className="comment mb-4 text-justify animate__animated animate__fadeInLeft animate__delay-1s" >
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
          onChange={({ target }) => comments[i].reply = target.value}
          // onClick={postReply}
        />
        <p className="pt-4 pb-0 text">
            {comments[i].reply}
            </p>
        <button type="button" className="btnsubmit ml-5" >
          Add
        </button> 
        {currentUser.email == 'parthsharmabareilly@gmail.com'?  <button className='btndelete' id='crossButton' onClick={e => deleteComment(e, _id)}> Delete </button>: null }
        {/* <button className='btndelete' id='crossButton' onClick={e => deleteComment(e, _id)}>X</button> */}
      </div>
          </div>
        ))}
        </div>
        </div>
        </div>
  );
}