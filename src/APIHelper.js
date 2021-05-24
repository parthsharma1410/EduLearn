
import axios from "axios"

const API_URL = "http://localhost:4000/help/"

async function createComment(comment) {
  const { data: newComment } = await axios.post(API_URL, {
    comment,
  })
  return newComment
}

async function getAllComments() {
  const { data: comments } = await axios.get(API_URL)
  return comments
}

export default { createComment, getAllComments }