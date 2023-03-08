import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import commonReducer from "@src/features/common/commonSlice";
import noticeReducer from "@src/features/notice/noticeSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    notice: noticeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
