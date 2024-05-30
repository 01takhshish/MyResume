// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../feature/formSlice';
import DetailsIndexReducer from '../feature/DetailsIndex';

import imageSlice from '../feature/upploadImage'

export const store = configureStore({
  reducer: {
    i: DetailsIndexReducer,
    form: formReducer,
    image: imageSlice
  }
});
