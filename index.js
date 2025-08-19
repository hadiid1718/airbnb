const path = require("path");
const express = require("express");
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter"); 
const rootDir = require("./utils/pathUtils");

const app = express();

// Middleware logger
app.use("/", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use( hostRouter);
app.use(userRouter);

// Static files
app.use(express.static(path.join(rootDir, "public")));

// 404 page
app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});

