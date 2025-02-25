import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const ImageSlice = createSlice({
  name: 'Image',
  initialState,
  reducers: {
    setImageValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setImageValue } = ImageSlice.actions;

export default ImageSlice.reducer;
