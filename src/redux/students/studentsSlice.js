import { createSlice } from '@reduxjs/toolkit';
import {
  fetchStudent,
  check,
  countArchiveStudents,
  clearAllStudents,
} from './studentOperations';
const initialState = {
  students: null,
  isLoading: false,
  check: true,
  archive: 0,
};

const authSlice = createSlice({
  name: 'students',
  initialState,
  extraReducers: {
    [fetchStudent.fulfilled](state, action) {
      state.students = action.payload;
    },
    [fetchStudent.rejected](state, _) {
      return state;
    },
    [check](state, action) {
      state.check = action.payload;
    },
    [countArchiveStudents](state, action) {
      state.archive = action.payload;
    },
    [clearAllStudents](state, _) {
      state.archive = 0;
    },
  },
});

export default authSlice.reducer;
