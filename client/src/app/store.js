import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import UserDetailReducer from "../features/userDetail/userDetailSlice";
import ShiftSchedulingReducer from "../features/intouch/intouchSlice";
import StaffManagementReducer from "../features/workHistory/workHistorySlice";
import PayrollReducer from "../features/payroll/payrollSlice";
import OtherStaffReducer from "../features/hrManager/OtherStaff/OtherStaffSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userDetail: UserDetailReducer,
    staffManagement: StaffManagementReducer,
    shiftScheduling: ShiftSchedulingReducer,
    payroll: PayrollReducer,
    otherStaff: OtherStaffReducer,
  },
});
