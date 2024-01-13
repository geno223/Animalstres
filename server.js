//Dependencies
require("dotenv").config();
require("./config/db");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { PORT = 3000 } = process.env;

const app = express();

//Middleware

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("method-override"));
app.use(express.static("public"));

//Routes
//test
app.get("/", (req, res) => {
  res.send("anmial cookies");
});

//Listenerr

app.listen(PORT, () => console.log(`Listening to ${PORT}`));
