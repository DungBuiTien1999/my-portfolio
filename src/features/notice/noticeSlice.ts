import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@src/app/store";

interface NoticeState {
  openSuccessMsg: boolean;
  openFailure: boolean;
}

const initialState: NoticeState = {
  openSuccessMsg: false,
  openFailure: false,
};

export const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    setOpenSuccess: (state, action: PayloadAction<boolean>) => {
      state.openSuccessMsg = action.payload;
    },
    setOpenFailure: (state, action: PayloadAction<boolean>) => {
      state.openFailure = action.payload;
    },
  },
});

export const { setOpenSuccess, setOpenFailure } = noticeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const noticeState = (state: RootState) => state.notice;

export default noticeSlice.reducer;
