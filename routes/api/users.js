const express = require("express");
const usersController = require("../../controllers/usersController");

const router = express.Router();

router
  .route("/")
  .get(usersController.getAllUser)
  .post(usersController.insertUser);

router
  .route("/:nim")
  .post(usersController.updateUserData)
  .delete(usersController.deleteUser);
module.exports = router;
