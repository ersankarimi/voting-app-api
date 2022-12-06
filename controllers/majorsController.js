const { connection } = require("../config/dbConn");

const insertMajors = (req, res) => {
  const { id_jurusan, nama_jurusan } = req.body;
  connection.query(
    `CALL insert_data_jurusan(?, ?)`,
    [id_jurusan, nama_jurusan],
    (err, rows) => {
      console.log(err, rows);
      if (err) {
        return res.status(400).json({
          errors: {
            success: false,
            message: "Something went wrong",
            code: err.code,
          },
        });
      }
      return res.json({
        success: true,
        message: "Success insert the data",
        desription: rows,
      });
    }
  );
};

module.exports = { insertMajors };
