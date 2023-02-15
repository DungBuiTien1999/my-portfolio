import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@src/app/store";

interface CommonState {
  isShowNav: boolean;
  isLightMode: boolean;
  activeTab: string;
  activeSection: string;
}

const initialState: CommonState = {
  isShowNav: false,
  isLightMode: false,
  activeTab: "",
  activeSection: "#home",
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
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setShowNav, changeDarkMode, setActiveTab, setActiveSection } =
  commonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const commonState = (state: RootState) => state.common;

export default commonSlice.reducer;
