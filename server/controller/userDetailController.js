const asyncHandler = require("express-async-handler");
const userDetailModel = require("../models/userDetailModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const addUserDetailData = asyncHandler(async (req, res) => {
  const {
    userDetail_userAccountInformation_email,
    userDetail_userAccountInformation_password,
    userDetail_userAccountInformation_userName,
    userDetail_userAccountInformation_userLogin,
    userDetail_userAccountInformation_mobillePhone,
  } = req.body;

  if (
    !userDetail_userAccountInformation_email ||
    !userDetail_userAccountInformation_password
  ) {
    res.status(401);
    throw new Error("Please Enter Complete User Data");
  }

  const alreadyExist = await userDetailModel.findOne({
    userDetail_userAccountInformation_email,
  });

  if (alreadyExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  const hashedPassword = await bcrypt.hash(
    userDetail_userAccountInformation_password,
    2
  );

  const user = await userDetailModel.create({
    userDetail_userAccountInformation_email,
    userDetail_userAccountInformation_password: hashedPassword,
    userDetail_userAccountInformation_userName,
    // userDetail_userAccountInformation_role,
    userDetail_userAccountInformation_userLogin,
    userDetail_userAccountInformation_mobillePhone,
  });

  getToken(user._id),
    res.status(200).json({
      success: true,
      uid: user._id,
      userEmail: user.userDetail_userAccountInformation_email,
      userPasword: user.userDetail_userAccountInformation_password,
      // userRole: user.userDetail_userAccountInformation_role,
    });
});

const getUserDetailData = asyncHandler(async (req, res) => {
  const users = await userDetailModel.find();

  if (users.length >= 0) {
    res.status(200).json(users);
  } else {
    res.status(401);
    throw new Error("Users Collection Empty");
  }
});
const updateClient = asyncHandler(async (req, res) => {
  const users = await userDetailModel.find();

  if (users.length >= 0) {
    res.status(200).json(users);
  } else {
    res.status(401);
    throw new Error("Users Collection Empty");
  }
});

const deleteUserDetailData = asyncHandler(async (req, res) => {
  const users = await userDetailModel.findById(req.params.id);

  console.log(users);

  if (!users) {
    throw new Error("users Not Found!...");
  }
  users.remove();
  res.status(200).json({ message: "User Deleted Successfully!..." });
});

const loginUser = asyncHandler(async (req, res) => {
  const {
    userDetail_userAccountInformation_email,
    userDetail_userAccountInformation_password,
  } = req.body;

  console.log(req.body, "body");

  if (userDetail_userAccountInformation_email === "") {
    res.status(401);
    throw new Error("User Name is Empty");
  } else {
    if (userDetail_userAccountInformation_password === "") {
      res.status(401);
      throw new Error("User Password is Empty");
    }
  }

  const user = await userDetailModel.findOne({
    userDetail_userAccountInformation_email,
  });

  console.log(user, "user in backend");

  if (
    user &&
    (await bcrypt.compare(
      userDetail_userAccountInformation_password,
      user.userDetail_userAccountInformation_password
    ))
  ) {
    getToken(user._id);
    res.status(200).json({
      success: true,
      userEmail: user.userDetail_userAccountInformation_email,
      userName: user.userDetail_userAccountInformation_userName,
    });
  } else {
    throw new Error("Invailid Credential!.");
  }
});

const getToken = (id) => {
  console.log(process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "8h" });
};

module.exports = {
  addUserDetailData,
  getUserDetailData,
  loginUser,
  deleteUserDetailData,
  updateClient,
};
