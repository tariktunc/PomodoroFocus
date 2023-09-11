// Store.js
"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";
import timerSlice from "./Slices/timerSlice";

const reducer = {
  counter: counterSlice, // counterReducer
  timerSetting: timerSlice,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
// store'un default olarak export edilmesi gerekiyor
