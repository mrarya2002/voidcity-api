const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    title:String,
    description:String,
    year:Number,
    rating:Number,
    poster:String,
    genre:[{ type: String }],
    ott:String,
    category:String,
    hindiUrl:String,
    englishUrl:String,
})

module.exports = mongoose.model("Movie",moviesSchema)