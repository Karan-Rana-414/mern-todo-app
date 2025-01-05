import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import todosReducer from "./todos/todosSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export default store;
