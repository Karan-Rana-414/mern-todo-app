import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get("/todos");
    return data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to fetch todos");
  }
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo, { rejectWithValue }) => {
  try {
    const { data } = await api.post("/todos", todo);
    return data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to add todo");
  }
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async ({ id, ...todo }, { rejectWithValue }) => {
  try {
    const { data } = await api.put(`/todos/${id}`, todo);
    return data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to update todo");
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/todos/${id}`);
    return id;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Failed to delete todo");
  }
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload.reverse();
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        );
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
