import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
  name: "data",
  initialState: {
    todoList: [],
    doneList: [],
  },
  reducers: {
    setTodoList: (state, action) => {
      state.todoList.push(action.payload);
    },
    setDoneList: (state, action) => {
      state.doneList.push(action.payload);
    },
    removeTodoItem: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
    removeDoneListItem: (state, action) => {
      state.doneList.splice(action.payload, 1);
    },
  },
});

export const { setTodoList, setDoneList, removeTodoItem, removeDoneListItem } =
  data.actions;

export default data.reducer;
