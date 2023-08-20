// db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://zoro:zoro@cluster0.lf3v7yr.mongodb.net/merndata?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("connected")
}).catch((error)=>{
  console.log(error)
})



module.exports = mongoose;
