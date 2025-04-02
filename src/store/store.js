import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../Features/countriesSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
