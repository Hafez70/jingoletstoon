import { createSlice } from '@reduxjs/toolkit';
import storage from "../utils/storage";

// Define the initial state using that type
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: storage.getToken(),
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    setToken: (state, action) => {
      storage.setToken(action.payload);
      return { ...state, token: action.payload };
    },
    cleanUser: (state, action) => {
      storage.clearToken();
      return { token: "", user: null };
    },
  },
});

export const { setUser, cleanUser,setToken } = userSlice.actions;
export default userSlice.reducer;
