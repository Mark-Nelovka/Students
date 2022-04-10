import { createSlice } from '@reduxjs/toolkit';
import {
  fetchStudent,
  check,
  countArchiveStudents,
  clearAllStudents,
  pageIncrement,
  pageDecrement,
  filter,
  filterArr,
  searchStudent,
} from './studentOperations';

const initialState = {
  students: null,
  isLoading: false,
  totalCount: 0,
  archive: 0,
  studForPagination: null,
  filter: '',
};

const authSlice = createSlice({
  name: 'students',
  initialState,
  extraReducers: {
    [fetchStudent.fulfilled](state, action) {
      state.students = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.studForPagination = action.payload.data;
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
    [pageIncrement.fulfilled](state, action) {
      // console.log(action.payload);
      state.studForPagination = [...state.students, ...action.payload];
      state.students = action.payload;
    },
    [pageIncrement.rejected](state, _) {
      return state;
    },
    [pageDecrement.fulfilled](state, action) {
      // console.log(action.payload);
      state.studForPagination = action.payload;
      state.students = action.payload;
    },
    [filter](state, action) {
      state.filter = action.payload;
    },
    [filterArr](state, action) {
      state.students = action.payload;
    },
    [searchStudent.fulfilled](state, action) {
      console.log(action.payload);
      state.students = action.payload;
    },
  },
});

export default authSlice.reducer;
