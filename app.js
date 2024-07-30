const express = require("express");
require("dotenv/config");

const app = express();
const env = process.env;

const host = env.HOST;
const port = env.PORT;
// start server
app.listen(port, host, () => {
  console.log(`App is running at https://${host}:${port}`);
});
