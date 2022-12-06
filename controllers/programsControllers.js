const { connection } = require("../config/dbConn");

const insertProgram = (req, res) => {
  const { id_prodi, id_jurusan, nama_prodi } = req.body;

  connection.query(
    `CALL insert_data_prodi(?,?,?)`,
    [id_prodi, id_jurusan, nama_prodi],
    (err, rows) => {
      if (err) {
        console.log(err);
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
        description: rows,
      });
    }
  );
};

module.exports = { insertProgram };
