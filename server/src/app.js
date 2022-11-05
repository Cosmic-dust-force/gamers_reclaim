const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", require("./api/api"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;