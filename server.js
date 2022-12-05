const express = require("express");
require("dotenv").config();

const app = express();
const { connectDB, connection } = require("./config/dbConn");

const PORT = process.env.PORT || 3000;

// connect database
connectDB();

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`);
});
