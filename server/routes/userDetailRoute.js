const express = require("express");
const router = express.Router();
const {
  addUserDetailData,
  getUserDetailData,
  deleteUserDetailData,
  loginUser,
  updateClient
} = require("../controller/userDetailController");

router.route("/adduserdetail").post(addUserDetailData);
router.route("/loginuser").post(loginUser);
router.route("/getuserdetail").get(getUserDetailData);
router.route("/deluserdetail/:id").delete(deleteUserDetailData)
// router.route("/userdetail/:id").put(updateClient).delete(deleteUserDetailData)

module.exports = router;
