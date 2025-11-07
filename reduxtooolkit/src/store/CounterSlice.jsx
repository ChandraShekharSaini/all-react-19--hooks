import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.count += 1;
    },

    decreament: (state, action) => {
      state.count -= 1;
    },

    setZero: (state, action) => {
      state.count = 0;
    },

    increaseByNum: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increament, decreament, setZero, increaseByNum } =
  counterSlice.actions;
export default counterSlice.reducer;
