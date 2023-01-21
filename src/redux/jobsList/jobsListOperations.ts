import { createAsyncThunk } from "@reduxjs/toolkit";

import { getJobsList } from "../../services/api/getJobsList";

import { IDataFromBackend } from "../../Interfaces/Interfaces";

export const fetchJobsList = createAsyncThunk<
  IDataFromBackend[],
  undefined,
  { rejectValue: string }
>("users/fetchById", async (_, { rejectWithValue }) => {
  try {
    const data = await getJobsList();

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
