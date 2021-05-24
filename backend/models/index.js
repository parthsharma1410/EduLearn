const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Parth:Parth@EduLearn@cluster0.o77wi.mongodb.net/Comments?retryWrites=true&w=majority", {
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) 
mongoose.Promise = Promise 

module.exports.Comments = require("./comments")