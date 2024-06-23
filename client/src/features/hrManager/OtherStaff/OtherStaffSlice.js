import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import otherStaffService from "./OtherStaffService";

const initialState = {
  OtherStaff: [],
  OtherStaffTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  isDelSuccess: false,
  message: "",
};

export const getOtherStaffing = createAsyncThunk(
  "OtherStaff/getOtherStaff",
  async (_, thunkAPI) => {
    try {
      return await otherStaffService.getOtherStaff();
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

export const getSingleOtherStaffing = createAsyncThunk(
  "OtherStaff/getSingle",
  async (data, thunkAPI) => {
    try {
      return await otherStaffService.getSingleOtherStaff(data);
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

export const addOtherStaffing = createAsyncThunk(
  "OtherStaff/addOtherStaffing",
  async (otherStaffData, thunkAPI) => {
    try {
      return await otherStaffService.addOtherStaff(otherStaffData);
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

export const deleteOtherStaffingData = createAsyncThunk(
  "OtherStaff/del",
  async (otherStaffData, thunkAPI) => {
    try {
      return await otherStaffService.deleteOtherStaffData(otherStaffData);
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
export const updateOtherStaffingData = createAsyncThunk(
  "OtherStaff/update",
  async (otherStaffData, thunkAPI) => {
    try {
      return await otherStaffService.updateShiftSchedulingData(
        otherStaffData.id.id,
        otherStaffData.otherStaffingData
      );
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

const OtherStaffingSlice = createSlice({
  name: "OtherStaff",
  initialState,
  reducers: {
    saveOtherStaffingForm: (state, action) => {
      state.OtherStaffTemp = action.payload;
    },
    resetOtherStaffing: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOtherStaffing.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getOtherStaffing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.OtherStaff = action.payload;
      })
      .addCase(getOtherStaffing.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(getSingleOtherStaffing.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getSingleOtherStaffing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.OtherStaffTemp = action.payload;
      })
      .addCase(getSingleOtherStaffing.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(addOtherStaffing.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(addOtherStaffing.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addOtherStaffing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.OtherStaff.push(action.payload);
      })
      .addCase(updateOtherStaffingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updateOtherStaffingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.OtherStaffTemp = action.payload;
      })
      .addCase(updateOtherStaffingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(deleteOtherStaffingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isDelSuccess = false;
        state.isError = false;
      })
      .addCase(deleteOtherStaffingData.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelSuccess = true;
        state.isError = false;
      })
      .addCase(deleteOtherStaffingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isDelSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetOtherStaffing, saveOtherStaffingForm } =
  OtherStaffingSlice.actions;

export default OtherStaffingSlice.reducer;
