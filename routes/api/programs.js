const express = require("express");
const programsControllers = require("../../controllers/programsControllers");

const router = express.Router();

router.route("/").post(programsControllers.insertProgram);

module.exports = router;
