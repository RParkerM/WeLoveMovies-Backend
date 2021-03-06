if (process.env.USER) require("dotenv").config();
const cors = require("cors");
const express = require("express");
const moviesRouter = require("./movies/movies.router.js");
const theatersRouter = require("./theaters/theaters.router");
const reviewRouter = require("./reviews/reviews.router");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewRouter);

app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
