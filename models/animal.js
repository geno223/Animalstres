const mongoose = require("./connection")

const animalSchema = new mongoose.Schema({
    species: String,
    location: String,
    lifeExpectancy: Number,
    extinct: Boolean
})

const Animal =  mongoose.model('Animal', animalSchema)

module.exports= Animal