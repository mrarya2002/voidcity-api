const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const db = require("./db")
const MovieRouter = require("./routes/movies")

const app = express();
const port = process.env.PORT || 3000

app.use(cors)
app.use(bodyParser.json());


app.use("/",MovieRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});