import {createSlice} from '@reduxjs/toolkit';

export const menuSLice = createSlice({
  name: 'activeMenu',
  initialState: {
    activeMenu: 'Home',
  },
  reducers: {
    changeMenu: (state, action) => {
      const item = action.payload;
      state.activeMenu = item;
    },

    clearMenu: state => {
      state.activeMenu = 'Home';
    },
  },
});

export const {clearMenu, changeMenu} = menuSLice.actions;

export default menuSLice.reducer;
