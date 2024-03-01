import {createSlice} from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'activeCategory',
  initialState: {
    activeCategory: 'Semua',
  },
  reducers: {
    changeCategory: (state, action) => {
      const item = action.payload;
      state.activeCategory = item;
    },

    clearCategory: state => {
      state.activeCategory = 'Semua';
    },
  },
});

export const {clearCategory, changeCategory} = categorySlice.actions;

export default categorySlice.reducer;
