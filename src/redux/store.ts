import { configureStore } from "@reduxjs/toolkit";

import jobsListSlice from "./jobsList/jobsListSlice";

export const store = configureStore({
  reducer: jobsListSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
