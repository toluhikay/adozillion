import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  src: "",
};

const PictureSlice = createSlice({
  name: "pictureModalState",
  initialState,
  reducers: {
    setPictureModalOpen: (state, { payload }) => {
      state.isOpen = true;
      state.src = payload;
    },
    setPictureModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setPictureModalClose, setPictureModalOpen } = PictureSlice.actions;
export default PictureSlice.reducer;
