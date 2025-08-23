const path = require("path");
const express = require("express");
const { getAddHome, postAddhome, getHostHome } = require("../controller/hostControler");

const hostRouter = express.Router();


// GET route
hostRouter.get("/add-home", getAddHome);
hostRouter.get("/host-home-list", getHostHome)

// POST route

hostRouter.post("/add-home", postAddhome);

module.exports =  hostRouter ; 
