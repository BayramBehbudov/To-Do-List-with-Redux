import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./DataSlice.jsx";
import booleanReducer from "./BooleanSlice.jsx";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    bool: booleanReducer,
  },
});
