const mongoose = require("mongoose");

const userDetailSchema = mongoose.Schema({
  userDetail_userAccountInformation_userName: { type: String },
  userDetail_userAccountInformation_userLogin: { type: String },
  userDetail_userAccountInformation_email: {
    type: String,
    required: [true, "Please Add Email"],
    unique: true,
  },
  // userDetail_role: { type: String },
  userDetail_userAccountInformation_mobillePhone: { type: String },
  userDetail_userAccountInformation_password: {
    type: String,
    required: [true, "Please Add Password"],
  },
  userDetail_userAccountInformation_retypepassword: { type: String },
  userDetail_userAccountInformation_userStatus: { type: String },
  userDetail_userAccountInformation_userType: { type: String },
  userDetail_userAccountInformation_securityGroup: { type: String },
  userDetail_userAccountInformation_systemAccess: { type: String },
  userDetail_homeBranch_check: { type: String },
  userDetail_regionBranchLockSelection_securityGroup: { type: String },
  userDetail_regionBranchLockSelection_regions: { type: String },
  userDetail_regionBranchLockSelection_branches: { type: String },
  userDetail_timeZoneInformation_timeZone: { type: String },
  userDetail_timeZoneInformation_DST: { type: String },
});

module.exports = mongoose.model("userDetailModel", userDetailSchema);