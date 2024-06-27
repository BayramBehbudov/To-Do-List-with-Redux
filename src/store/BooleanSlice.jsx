import { createSlice } from "@reduxjs/toolkit";

export const boolean = createSlice({
  name: "boolean",
  initialState: {
    todoActive: false,
    doneActive: false,
  },
  reducers: {
    setTodoActive: (state) => {
      state.todoActive = !state.todoActive;
    },
    setDoneActive: (state) => {
      state.doneActive = !state.doneActive;
    },
  },
});

export const { setTodoActive, setDoneActive } = boolean.actions;

export default boolean.reducer;
