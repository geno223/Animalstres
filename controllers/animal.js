const express = require("express");
const Animal = require("../models/animal");
const seedData = require("../models/seedData");
const router = express.Router();
//routes

// Seed
router.get("/seed", async (req, res) => {
  try {
    // Delete all animals
    await Animal.deleteMany({});
    // seed animals
    const animals = await Animal.create(seedData);
    // send animals
    res.json(animals);
  } catch (error) {
    console.log(error.message);
    res.send("Theres a issue with the seeds");
  }
});
//index-get
router.get("/", async (req, res) => {
  const animals = await Animal.find({});
  res.render("animal/index.ejs", { animals });
});

//new-get
router.get("/new", (req, res) => {
  res.render("animal/new.ejs");
});
//delete
router.delete("/:id", async (req, res) =>{
    const animal = await Animal.findByIdAndDelete(req.params.id)
    res.redirect("/animal")
})
//update-put
router.put("/:id", async (req, res)=>{
    const id = req.params.id
    req.body.extinct = req.body.extinct === "on" ? true : false;
    const animal = await Animal.findByIdAndUpdate(id, req.body)
    res.redirect(`/animal/${id}`)
})
//create- post
router.post("/", async (req, res) => {
  req.body.extinct = req.body.extinct === "on" ? true : false;
  await Animal.create(req.body)
  res.redirect("/animal")
});
//edit- get
router.get("/:id/edit", async(req, res)=>{
    const id = req.params.id
    const animal = await Animal.findById(id)
    res.render("animal/edit.ejs", {animal})
})
//show- get

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const animal = await Animal.findById(id);
    res.render("animal/show.ejs", { animal });
  } catch (error) {
    console.log(error.message);
    res.send("Theres a issue with the show");
  }
});

module.exports = router;
