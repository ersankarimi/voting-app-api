const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const connectDB = async () => {
  try {
    await connection.connect();
  } catch (err) {
    console.error(err);
  }
};

module.exports = { connectDB, connection };
