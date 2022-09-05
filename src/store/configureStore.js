import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notificationSlice from "store/notificationSlice";
import userSlice from "store/userSlice";

const reducer = combineReducers({
  notification: notificationSlice,
  userInfo: userSlice,
});

export const store = configureStore({
  reducer,
});
