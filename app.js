const express = require("express");
const os = require("os");
const app = express();

// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");


var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res
  .status(200)
  .json({ message: "Welcome to vmoroni RAT application." });
});

app.get("/liveness", (req, res) => {
  return res
    .status(200)
    .json({
      message: "vmoroni RAT API is alive.",
      path: process.cwd(),
    });

});

app.get("/readiness", (req, res) => {

  // check for DB connection
  // TODO

  return res
    .status(200)
    .json({
      message: "vmoroni RAT API is ready.",
      platform: os.platform(),
      freemen: os.freemem(),
      homedir: os.homedir(),
      date: new Date().getTime(),
    });
});

require("./app/routes/rat.routes.js")(app);

module.exports = app