import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shiftSchedulingService from "./intouchService";

const initialState = {
  ShiftScheduling: [],
  ShiftSchedulingTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  isDelSuccess: false,
  message: "",
};

export const getShiftScheduling = createAsyncThunk(
  "shiftScheduling/getShiftScheduling",
  async (_, thunkAPI) => {
    try {
      return await shiftSchedulingService.getShiftScheduling();
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

export const getSingleShiftScheduling = createAsyncThunk(
  "shiftScheduling/getSingle",
  async (data, thunkAPI) => {
    try {
      return await shiftSchedulingService.getSingleShiftScheduling(data);
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

export const addShiftScheduling = createAsyncThunk(
  "shiftScheduling/addshiftscheduling",
  async (shiftSchedulingData, thunkAPI) => {
    try {
      return await shiftSchedulingService.addShiftScheduling(
        shiftSchedulingData
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

export const deleteShiftSchedulingData = createAsyncThunk(
  "shiftscheduling/del",
  async (shiftSchedulingData, thunkAPI) => {
    try {
      return await shiftSchedulingService.deleteShiftSchedulingData(
        shiftSchedulingData
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
export const updateShiftSchedulingData = createAsyncThunk(
  "shiftscheduling/update",
  async (shiftSchedulingData, thunkAPI) => {
    try {
      return await shiftSchedulingService.updateShiftSchedulingData(
        shiftSchedulingData.id.id,
        shiftSchedulingData.shiftSchedulingMainData
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

const shiftSchedulingSlice = createSlice({
  name: "Shift Scheduling",
  initialState,
  reducers: {
    saveShiftSchedulingForm: (state, action) => {
      state.ShiftSchedulingTemp = action.payload;
    },
    resetShiftScheduling: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShiftScheduling.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getShiftScheduling.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ShiftScheduling = action.payload;
      })
      .addCase(getShiftScheduling.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(getSingleShiftScheduling.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getSingleShiftScheduling.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.ShiftSchedulingTemp = action.payload;
      })
      .addCase(getSingleShiftScheduling.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(addShiftScheduling.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(addShiftScheduling.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addShiftScheduling.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.ShiftScheduling.push(action.payload);
      })
      .addCase(updateShiftSchedulingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updateShiftSchedulingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ShiftSchedulingTemp = action.payload;
      })
      .addCase(updateShiftSchedulingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //
      .addCase(deleteShiftSchedulingData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isDelSuccess = false;
        state.isError = false;
      })
      .addCase(deleteShiftSchedulingData.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelSuccess = true;
        state.isError = false;
      })
      .addCase(deleteShiftSchedulingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isDelSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  resetShiftScheduling,
  saveShiftSchedulingForm,
} = shiftSchedulingSlice.actions;

export default shiftSchedulingSlice.reducer;
