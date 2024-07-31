const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
const env = process.env;
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
app.options("*", cors());
// router
const authRouter = require("./routes/auth.route.js");

const host = env.HOST;
const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((e) => console.log(e));
// start server
app.listen(port, host, () => {
  console.log(`App is running at https://${host}:${port}`);
});
