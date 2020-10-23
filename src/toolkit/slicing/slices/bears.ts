import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Bear } from "../../../model/Bear"

const bearSlice = createSlice({
  name: "bears",
  initialState: [{ name: "Yogi" }],
  reducers: {
    addBear(state: Bear[], action: PayloadAction<string>) {
      state.push({ name: action.payload })
    },

    clearBears(state: Bear[]) {
      state.length = 0
    }
  }
})

export const { addBear, clearBears } = bearSlice.actions

export const bearReducer = bearSlice.reducer
