import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setLoggedIn(state, value) {
      state.isLoggedIn = value.payload;
    },
  },
});

export const { setLoading, setToken, setLoggedIn } = authSlice.actions;

export default authSlice.reducer;
