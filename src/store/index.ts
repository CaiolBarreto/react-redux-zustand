import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: ['Study redux'],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const store = configureStore({
  reducer: {
    toDo: toDoSlice.reducer
  }
})

export const { add } = toDoSlice.actions

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector