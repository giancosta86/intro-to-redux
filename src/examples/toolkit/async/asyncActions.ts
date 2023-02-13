import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAfterDelay } from "./delays";

export const readWikipediaTitle = createAsyncThunk("readTitle/wikipedia", () =>
  getAfterDelay("Wikipedia", 1500)
);

export const readGcWebsiteTitle = createAsyncThunk("readTitle/gcwebsite", () =>
  getAfterDelay("Gianluca Costa's Creations", 1000)
);

const asyncSlice = createSlice({
  name: "webpages",
  initialState: {
    titles: {
      wikipedia: "(not initialized)",
      gcwebsite: "(not initialized)"
    }
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(readWikipediaTitle.pending, state => {
      state.titles.wikipedia = "(reading Wikipedia...)";
    });

    builder.addCase(readGcWebsiteTitle.pending, state => {
      state.titles.gcwebsite = "(reading gianlucacosta.info...)";
    });

    builder.addCase(readWikipediaTitle.fulfilled, (state, action) => {
      state.titles.wikipedia = action.payload;
    });

    builder.addCase(readGcWebsiteTitle.fulfilled, (state, action) => {
      state.titles.gcwebsite = action.payload;
    });

    builder.addCase(readWikipediaTitle.rejected, state => {
      state.titles.wikipedia = "#ERROR#";
    });

    builder.addCase(readGcWebsiteTitle.rejected, state => {
      state.titles.gcwebsite = "#ERROR#";
    });
  }
});

export const asyncReducer = asyncSlice.reducer;
