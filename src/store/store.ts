import { configureStore } from "@reduxjs/toolkit";
import pictureModalSlice from "../features/pictureModalSlice";

export const store = configureStore({
  reducer: {
    pictureModal: pictureModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
