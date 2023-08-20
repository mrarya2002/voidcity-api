const express = require('express')
const app = express()
const port = process.env.PORT ||  3000
const mongoose = require('mongoose');

const MovieRouter = require("./routes/movies")

const cors = require("cors")
const bodyParser = require('body-parser');

app.use(cors())
app.use("/",MovieRouter)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



mongoose.connect("mongodb+srv://zoro:zoro@cluster0.lf3v7yr.mongodb.net/merndata?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("connected")
}).catch((error)=>{
  console.log(error)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})