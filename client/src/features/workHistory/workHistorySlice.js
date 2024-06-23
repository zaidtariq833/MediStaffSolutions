import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import staffManagementServices from "./workHistoryService";

const initialState = {
  StaffManagement: [],
  StaffManagementTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  isDelSuccess: false,
  message: "",
};

export const addStaffManagementData = createAsyncThunk(
  "StaffManagement/add",
  async (staffManagementData, thunkAPI) => {
    try {
      const result = await staffManagementServices.addStaffManagementData(
        staffManagementData
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

export const getAllStaffManagementData = createAsyncThunk(
  "StaffManagement/get",
  async (_, thunkAPI) => {
    try {
      const result = await staffManagementServices.getStaffManagementData();
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
export const getSingleStaffManagementData = createAsyncThunk(
  "StaffManagement/getSing",
  async (data, thunkAPI) => {
    try {
      console.log("sliceDone");
      const result = await staffManagementServices.getSingleStaffManagementData(data);
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

export const deleteStaffManagementData = createAsyncThunk(
  "StaffManagement/del",
  async (data, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await staffManagementServices.deleteStaffManagementData(data);
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
export const updateStaffManagementData = createAsyncThunk(
  "StaffManagement/upd",
  async (data, thunkAPI) => {
    try {
      const result = await staffManagementServices.updateStaffManagementData(
        data.id.id,
        data.finalStaffManagement
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

const staffManagementSlice = createSlice({
  name: "staffManagement",
  initialState,
  reducers: {
    reset: () => initialState,
    saveStaffManagementData: (state, action) => {
      state.StaffManagementTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStaffManagementData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllStaffManagementData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.StaffManagement = action.payload;
      })
      .addCase(getAllStaffManagementData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(getSingleStaffManagementData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getSingleStaffManagementData.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        state.StaffManagementTemp = action.payload;
      })
      .addCase(getSingleStaffManagementData.rejected, (state, action) => {
        state.isLoading = false;
        // state.isSuccess = false;
        // state.isError = false;
        state.message = action.payload;
      })
      //
      .addCase(addStaffManagementData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(addStaffManagementData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.StaffManagement.push(action.payload);
      })
      .addCase(addStaffManagementData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateStaffManagementData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updateStaffManagementData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.StaffManagementTemp = action.payload;
      })
      .addCase(updateStaffManagementData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteStaffManagementData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(deleteStaffManagementData.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelSuccess = true;
        state.isError = false;
      })
      .addCase(deleteStaffManagementData.rejected, (state, action) => {
        state.isLoading = false;
        state.isDelSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, saveStaffManagementData } = staffManagementSlice.actions;

export default staffManagementSlice.reducer;
