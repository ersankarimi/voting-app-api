const { connection } = require("../config/dbConn");

const getAllUser = async (req, res) => {
  connection.query("SELECT * FROM pengguna", (err, rows) => {
    if (err) throw err;

    res.json(rows);
  });
};

module.exports = { getAllUser };
