import { createSlice } from '@reduxjs/toolkit';
import { fetchStudent } from './studentOperations';
const initialState = {
  students: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'students',
  initialState,
  extraReducers: {
    [fetchStudent.fulfilled](state, action) {
      state.user = action.payload.students;
    },
  },
});

export default authSlice.reducer;
