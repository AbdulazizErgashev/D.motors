import { configureStore } from "@reduxjs/toolkit";
import timezoneReducer from "./reducers/timezoneReducer";
import timeReducer from "./reducers/timeReducer";

export const store = configureStore({
  reducer: {
    timezone: timezoneReducer,
    time: timeReducer,
  },
});
