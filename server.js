const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const api = require("./Routes/api");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Enable CORS with options
app.use(cors());

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use(express.json());
// app.use("/", api);

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Marina-Massage-Therapist",
  })
  .then(() => {
    console.log("Connected to DB", process.env.MONGO_URI);

    app.listen(process.env.PORT, function () {
      console.log(`Express server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
