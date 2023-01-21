import { createSlice } from "@reduxjs/toolkit";
import { fetchJobsList } from "./jobsListOperations";

import { IState } from "../../Interfaces/Interfaces";

const initialState: IState = {
  data: [],
  error: null,
  loading: false,
};

const jobsListSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobsList.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(fetchJobsList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchJobsList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default jobsListSlice.reducer;
