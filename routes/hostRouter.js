const path = require("path");
const express = require("express");

const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");


// GET route
hostRouter.get("/add-home", (req, res, next) => {
  console.log( req.body)
  res.sendFile(path.join(rootDir, "views", "Add-home.html"));
});

// POST route
const registerHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  registerHomes.push({ houseName: req.body.houseName})
  res.sendFile(path.join(rootDir, "views", "Addedhome.html"));
});


module.exports = { hostRouter, registerHomes };
