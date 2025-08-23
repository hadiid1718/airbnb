

const Home = require("../models/home");


exports.getAddHome = (req, res, next) => {
  res.render("host/Add-home", {
    pageTitle: "Add your Home",
    currentPage: "addHome",
  });
};
exports.getHostHome = (req, res, next) => {
  const registerHomes = Home.fetchAll((registerHomes)=> {
      console.log(registerHomes);
  res.render("host/host-home-list", {
    registerHomes: registerHomes,
    pageTitle: "Welcome Host home-list",
    currentPage: "host-home",
  });
  }) 

};

exports.postAddhome = (req, res, next) => {
  const {houseName, price, location, rating, imageURL } = req.body
  const home = new Home(houseName, price, location, rating, imageURL)
       home.save()
  res.render("host/AddedHome", {
    pageTitle: "Home added successfully",
    currentPage: "homeAdded",
  });
};