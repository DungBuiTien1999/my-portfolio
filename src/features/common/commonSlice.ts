import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@src/app/store";

interface CommonState {
  isShowNav: boolean;
}

const initialState: CommonState = {
  isShowNav: false,
};

export const commonSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setShowNav: (state, action: PayloadAction<boolean>) => {
      state.isShowNav = action.payload;
    },
  },
});

export const { setShowNav } = commonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const commonState = (state: RootState) => state.common;

export default commonSlice.reducer;
