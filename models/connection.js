require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
.on('open', ()=>{console.log('Connect to Mongo')})
.on('close', ()=>{console.log('Disconnected from Mongo')})
.on('error', (error)=>{console.log(error)})

module.exports = mongoose