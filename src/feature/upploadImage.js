// src/redux/slices/imageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageUrl: '',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.imageUrl = action.payload;
    },
    clearImage: (state) => {
      state.imageUrl = '';
    },
  },
});

export const { setImage, clearImage } = imageSlice.actions;

export default imageSlice.reducer;
