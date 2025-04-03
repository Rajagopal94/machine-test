import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=name,region,flag"
  );
  if (!response.ok) throw new Error("Failed to fetch countries");
  const data = await response.json();
  dispatch(setCountries(data));
};

export default countriesSlice.reducer;
