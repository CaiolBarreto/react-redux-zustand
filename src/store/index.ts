import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDoList = createSlice({
  name: 'toDo',
  initialState: ['Study redux'],
  reducers: {}
})

export const store = configureStore({
  reducer: {
    toDo: toDoList.reducer
  }
})