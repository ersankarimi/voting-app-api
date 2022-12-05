const express = require("express");
require("dotenv").config();
const { logger } = require("./middleware/logEvents");

const app = express();
const { connectDB } = require("./config/dbConn");

const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// custom middleware logger
app.use(logger);

// built-in middleware for json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`);
});
