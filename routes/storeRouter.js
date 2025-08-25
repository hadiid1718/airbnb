
const express = require("express");
const { getHome, getBookings, getIndex, getFavouriteList, getHomeDetails } = require("../controller/storeController");

const storeRouter = express.Router();
;

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHome)
storeRouter.get("/bookings", getBookings)
storeRouter.get("/favourites", getFavouriteList)
storeRouter.get("/homes/:homeId", getHomeDetails)

module.exports = storeRouter;
