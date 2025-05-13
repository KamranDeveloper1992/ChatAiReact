import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueInput: "",
};

export const ControllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    ChatValue: (state, action) => {
      state.valueInput = action.payload;
    },
  },
});

export const {ChatValue} = ControllerSlice.actions;

export default ControllerSlice.reducer;
