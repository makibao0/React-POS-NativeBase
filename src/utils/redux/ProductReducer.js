import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
  },
  reducers: {
    changeProduct: (state, action) => {
      const item = action.payload;
      state.product = item;
    },

    clearProduct: state => {
      state.product = [];
    },
  },
});

export const {clearProduct, changeProduct} = productSlice.actions;

export default productSlice.reducer;
