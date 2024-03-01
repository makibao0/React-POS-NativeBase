import {createSlice} from '@reduxjs/toolkit';

export const realTimeSlice = createSlice({
  name: 'realTime',
  initialState: {
    realTime: '',
  },
  reducers: {
    changeRealTime: (state, action) => {
      const item = action.payload;
      state.realTime = item;
    },
  },
});

export const {changeRealTime} = realTimeSlice.actions;

export default realTimeSlice.reducer;
