const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 4000
const db = require("./models/")
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function success(res, payload) {
  return res.status(200).json(payload)
}

app.get("/help", async (req, res, next) => {
  try {
    const comments = await db.Comments.find({})
    return success(res, comments)
  } catch (err) {
    next({ status: 400, message: "failed to get comments" })
  }
})

app.post("/help", async (req, res, next) => {
    // console.log(req.body)
  try {
    const comment = await db.Comments.create(req.body)
    return success(res, comment)
  } catch (err) {
    next({ status: 400, message: "failed to create comment" })
  }
})

app.delete("/help/:id", async (req, res, next) => {
  try {
    await db.Comments.findByIdAndRemove(req.params.id)
    return success(res, "Comment deleted")
  } catch (err) {
    next({ status: 400, message: "failed to delete comment" })
  }
})


app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})