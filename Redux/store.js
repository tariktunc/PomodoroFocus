// Store.js
"use client";

import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./Slices/timerSlice";

const reducer = {
  timerSetting: timerSlice,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
// store'un default olarak export edilmesi gerekiyor
