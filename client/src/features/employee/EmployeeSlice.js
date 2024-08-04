import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeeServices from "./EmployeeService";

const initialState = {
  Employees: [],
};
export const getCurrentEmployeesData = createAsyncThunk(
  "Employees/get",
  async (_, thunkAPI) => {
    try {
      const result = await employeeServices.getEmployeesData();
      return result;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const EmployeeSlice = createSlice({
  name: "Employees",
  initialState,
  //   reducers: {
  //     reset: () => initialState,
  //     savePayrollData: (state, action) => {
  //       state.PayrollTemp = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentEmployeesData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getCurrentEmployeesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Employees = action.payload;
      })
      .addCase(getCurrentEmployeesData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
