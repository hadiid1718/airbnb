const Favourite = require("../models/favourite");
const Home = require("../models/home");

/* INDEX PAGE */
exports.getIndex = (req, res) => {
  Home.fetchAll((registerHomes) => {
    res.render("store/index", {
      registerHomes,
      pageTitle: "Welcome to airbnb",
      currentPage: "Index",
    });
  });
};

/* HOME LIST */
exports.getHome = (req, res) => {
  Home.fetchAll((registerHomes) => {
    res.render("store/home-list", {
      registerHomes,
      pageTitle: "Homes",
      currentPage: "Home",
    });
  });
};

/* FAVOURITES */
exports.getFavouriteList = (req, res) => {
  Home.fetchAll((registerHomes) => {
    res.render("store/favourites", {
      registerHomes,
      pageTitle: "Favourites list",
      currentPage: "favourites",
    });
  });
};

exports.postAddToFavouriteList = (req, res) => {
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("error occured while marking favourites");
    }
    res.redirect("/favourites");
  });
};

/* BOOKINGS */
exports.getBookings = (req, res) => {
  res.render("store/bookings", {
    pageTitle: "My bookings",
    currentPage: "bookings",
  });
};

/* HOME DETAILS (IMPORTANT) */
exports.getHomeDetails = (req, res) => {
  const homeId = req.params.homeId;

  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect("/homes");
    }

    res.render("store/home-detail", {
      home,
      pageTitle: home.name,
      currentPage: "Home",
    });
  });
};
