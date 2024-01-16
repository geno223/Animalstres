const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()
//routes

//Seed Route

router.get("/seed", async (req, res)=>{
    await Animal.deleteMany({})
    const animals = await Animal.create([
        { 
            species: "Giant Panda", 
            extinct: false, 
            location: "China",
            lifeExpectancy: 15
         },
         { 
          species: "Grey Whale",
          extinct: false, 
          location: "Oceans", 
          lifeExpectancy: 50
        },
         { 
          species: "Golden Eagle", 
          extinct: false,
          location: "North America, Eurasia",
          lifeExpectancy: 20
          },
       
    ])
    res.json(animals)
})

module.exports= router