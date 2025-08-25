const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  const registerHomes = Home.fetchAll((registerHomes) => {
    console.log(registerHomes);
    res.render("store/index", {
      registerHomes: registerHomes,
      pageTitle: "Welcome to airbnb",
      currentPage: "Index",
    });
  });
};
exports.getHome = (req, res, next) => {
  const registerHomes = Home.fetchAll((registerHomes) => {
    console.log(registerHomes);
    res.render("store/home-list", {
      registerHomes: registerHomes,
      pageTitle: "Welcome to airbnb",
      currentPage: "Home",
    });
  });
};
exports.getFavouriteList = (req, res, next) => {
  const registerHomes = Home.fetchAll((registerHomes) => {
    console.log(registerHomes);
    res.render("store/favourites", {
      registerHomes: registerHomes,
      pageTitle: "Favourites list",
      currentPage: "favourites",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My bookings",
    currentPage: "bookings",
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, home => {
    if (!home) {
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "home",
      });
    }
  });
};
