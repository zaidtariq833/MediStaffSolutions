import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userDetailServices from "./userDetailServices";

const initialState = {
  UserDetail: [],
  UserDetailTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addUserDetailData = createAsyncThunk(
  "UserDetail/add",
  async (UserDetailData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await userDetailServices.addUserDetailData(UserDetailData);
      console.log(result);
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

export const getfuncUserDetailData = createAsyncThunk(
  "UserDetail/get",
  async (_, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await userDetailServices.getUserDetailData();
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
export const deleteUserDetailData = createAsyncThunk(
  "UserDetail/del",
  async (delData, thunkAPI) => {
    try {
      // console.log("PaidLeaveData", PaidLeaveData);
      const result = await userDetailServices.deleteUserDetailData(delData);
      // console.log(result);
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

const userDetailSlice = createSlice({
  name: "UserDetail",
  initialState,
  reducers: {
    reset: () => initialState,
    saveUserDetailData: (state, action) => {
      state.UserDetailTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getfuncUserDetailData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.UserDetail = action.payload;
    })
      .addCase(addUserDetailData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserDetailData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.UserDetail.push(action.payload);
        // state.UserDetail = action.payload; 
      })
      .addCase(addUserDetailData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      
  },
});

export const { reset,saveUserDetailData } = userDetailSlice.actions;

export default userDetailSlice.reducer;