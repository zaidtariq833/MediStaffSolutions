import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import payrollServices from "./payrollServices";

const initialState = {
  Payroll: [],
  PayrollTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  isDelSuccess: false,
  message: "",
};

export const addPayrollingData = createAsyncThunk(
  "Payroll/add",
  async (payrollData, thunkAPI) => {
    try {
      const result = await payrollServices.addPayrollData(
        payrollData
      );
      console.log(payrollData, "payrolled data")
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

export const getAllPayrollingData = createAsyncThunk(
  "Payroll/get",
  async (_, thunkAPI) => {
    try {
      const result = await payrollServices.getPayrollData();
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
export const getSinglePayrollingData = createAsyncThunk(
  "Payroll/getSing",
  async (data, thunkAPI) => {
    try {
      console.log("sliceDone");
      const result = await payrollServices.getSinglePayrollData(
        data
      );
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

export const deletePayrollingData = createAsyncThunk(
  "Payroll/del",
  async (data, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await payrollServices.deletePayrollData(
        data
      );
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
export const updatePayrollingData = createAsyncThunk(
  "Payroll/upd",
  async (data, thunkAPI) => {
    try {
      const result = await payrollServices.updatePayrollData(
        data.id.id,
        data.finalPayroll
      );
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

const payrollSlice = createSlice({
  name: "Payroll",
  initialState,
  reducers: {
    reset: () => initialState,
    savePayrollData: (state, action) => {
      state.PayrollTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPayrollingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllPayrollingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Payroll = action.payload;
      })
      .addCase(getAllPayrollingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(getSinglePayrollingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getSinglePayrollingData.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        state.PayrollTemp = action.payload;
      })
      .addCase(getSinglePayrollingData.rejected, (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        // state.isError = false;
        state.message = action.payload;
      })
      //
      .addCase(addPayrollingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(addPayrollingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Payroll.push(action.payload);
      })
      .addCase(addPayrollingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updatePayrollingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updatePayrollingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.PayrollTemp = action.payload;
      })
      .addCase(updatePayrollingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePayrollingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(deletePayrollingData.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelSuccess = true;
        state.isError = false;
      })
      .addCase(deletePayrollingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isDelSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, savePayrollData } = payrollSlice.actions;

export default payrollSlice.reducer;