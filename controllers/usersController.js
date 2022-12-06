const { connection } = require("../config/dbConn");

const getAllUser = async (req, res) => {
  connection.query("SELECT * FROM pengguna", (err, rows) => {
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
      data: rows,
    });
  });
};

const insertUser = async (req, res) => {
  const { nim, nama_lengkap, id_prodi, angkatan, jenis_kelamin } = req.body;

  connection.query(
    `CALL insert_data_pengguna(?,?,?,?,?);`,
    [nim, nama_lengkap, id_prodi, angkatan, jenis_kelamin],
    (err, rows) => {
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
        description: rows,
        data: { nim, nama_lengkap, id_prodi, angkatan, jenis_kelamin },
      });
    }
  );
};

const updateUserData = (req, res) => {
  const { nim, nama_lengkap, id_prodi, angkatan, jenis_kelamin } = req.body;

  const updateData = () =>
    connection.query(
      `CALL update_data_pengguna(?,?,?,?,?);`,
      [nim, nama_lengkap, id_prodi, angkatan, jenis_kelamin],
      (err, rows) => {
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
          message: "Success update the data",
          description: rows,
          data: { nim, nama_lengkap, id_prodi, angkatan, jenis_kelamin },
        });
      }
    );

  connection.query(
    `SELECT * FROM pengguna WHERE nim = ?`,
    [req.params.nim],
    (err, rows) => {
      if (rows.length < 1 || err) {
        return res.status(204).json({
          success: false,
        });
      }

      return updateData();
    }
  );
};

module.exports = { getAllUser, insertUser, updateUserData };
