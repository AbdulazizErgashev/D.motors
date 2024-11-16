import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timezone: localStorage.getItem("timezone") || "Asia/Tashkent",
  time: "",
};

const timezoneSlice = createSlice({
  name: "timezone",
  initialState,
  reducers: {
    setTimezone(state, action) {
      state.timezone = action.payload;
      localStorage.setItem("timezone", action.payload);
    },
    setTime(state, action) {
      state.time = action.payload;
    },
  },
});

export const { setTimezone, setTime } = timezoneSlice.actions;

export default timezoneSlice.reducer;
