import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@src/app/store";

interface CommonState {
  isShowNav: boolean;
  isLightMode: boolean;
}

const initialState: CommonState = {
  isShowNav: false,
  isLightMode: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setShowNav: (state, action: PayloadAction<boolean>) => {
      state.isShowNav = action.payload;
    },
    changeDarkMode: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { setShowNav, changeDarkMode } = commonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const commonState = (state: RootState) => state.common;

export default commonSlice.reducer;
