import { useAuth } from "./context/AuthContext";
import axios from "axios"

const API_URL = "http://localhost:4000/help/"

async function createComment(email, comment) {
    // const newdata = {
    //     'email': email,
    //     'comment': comment
    // }
    // console.log(newdata)
    // const email = props.email
    // const comment = props.comment
  const { data: newComment } = await axios.post(API_URL, {
    email,
    comment,
  })
  return newComment
}

async function deleteComment(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function getAllComments() {
  const { data: comments } = await axios.get(API_URL)
  return comments
}

export default { createComment, getAllComments, deleteComment }