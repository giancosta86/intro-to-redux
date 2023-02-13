import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ranger } from "../../../model/Ranger";

interface AddRangerPayload {
  name: string;
  stars: number;
}

const rangerSlice = createSlice({
  name: "rangers",
  initialState: [],
  reducers: {
    addRanger(state: Ranger[], action: PayloadAction<AddRangerPayload>) {
      state.push({ name: action.payload.name, stars: action.payload.stars });
    }
  }
});

export const { addRanger } = rangerSlice.actions;
export const rangerReducer = rangerSlice.reducer;
