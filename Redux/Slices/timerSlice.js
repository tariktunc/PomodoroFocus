"use client";

import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timerSetting",
  initialState: {
    pomoTime: 25,
    shortBreak: 5,
    longBreak: 10,
  },
  reducers: {
    setPomoTime: (state, action) => {
      state.pomoTime = action.payload;
    },
    setShortBreak: (state, action) => {
      state.shortBreak = action.payload;
    },
    setLongBreak: (state, action) => {
      state.longBreak = action.payload;
    },
    setActiveTimer: (state, action) => {
      state.activeTimer = action.payload;
    },
  },
});

export const { setPomoTime, setShortBreak, setLongBreak, setActiveTimer } =
  timerSlice.actions;
export default timerSlice.reducer;
