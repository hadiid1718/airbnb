const path = require("path");
const express = require("express");
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter"); 
const rootDir = require("./utils/pathUtils");
const { pageNotFound } = require("../airbnb-10/controller/error");

const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

// Middleware logger
app.use("/", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use( "/host", hostRouter);
app.use(storeRouter);

// Static files
app.use(express.static(path.join(rootDir, "public")));

// 404 page
app.use(pageNotFound);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});

