const express = require("express");
const majorsControllers = require("../../controllers/majorsController");

const router = express.Router();

router.route("/").post(majorsControllers.insertMajors);

module.exports = router;
