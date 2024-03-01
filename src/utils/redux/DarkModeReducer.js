import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: false,
  },
  reducers: {
    changeTheme: (state, action) => {
      const item = action.payload;
      state.theme = item;
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
