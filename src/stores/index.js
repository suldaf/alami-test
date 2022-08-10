import { createSlice, configureStore } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    aboutText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aligua. Ouis
        ipsum suspendisse ultrices gravida.`,
    phone: "021-12345678",
  },
  reducers: {
    changeText: (state, action) => {
      state.aboutText = action.payload;
    },
    changePhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { changePhone, changeText } = dataSlice.actions;

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
