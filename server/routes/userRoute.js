const express = require("express")
const router = express.Router()
const {getAllUsers, addUser, loginUser } = require("../controller/userController")

router.route("/getallusers").get(getAllUsers)
router.route("/adduser").post(addUser)
router.route("/loginuser").post(loginUser)


module.exports = router