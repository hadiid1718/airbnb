const path = require("path");
const express = require("express");

const hostRouter = express.Router();
const rootDir = require("../utils/pathUtils");


// GET route
hostRouter.get("/add-home", (req, res, next) => {
  res.render('Add-home', {pageTitle: 'Add your Home', currentPage: "addHome"});
});

// POST route
const registerHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log( "House successfully register for:",req.body)
  registerHomes.push(req.body)
  res.render('AddedHome', { pageTitle: "Home added successfully", currentPage: "homeAdded"});
});


module.exports = { hostRouter, registerHomes };
