import { createSlice } from '@reduxjs/toolkit';
import {
  fetchStudent,
  countArchiveStudents,
  clearAllStudents,
  pageIncrement,
  pageDecrement,
  filterArr,
  searchStudent,
  idForModal,
  arrArchive,
} from './studentOperations';

const initialState = {
  students: null,
  totalCount: 0,
  archive: 0,
  studForPagination: null,
  idForModal: 0,
  arrForArchive: [],
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
    [countArchiveStudents](state, action) {
      state.archive = action.payload;
    },
    [clearAllStudents](state, _) {
      state.archive = 0;
    },
    [pageIncrement.fulfilled](state, action) {
      state.studForPagination = [...state.students, ...action.payload];
      state.students = action.payload;
    },
    [pageIncrement.rejected](state, _) {
      return state;
    },
    [pageDecrement.fulfilled](state, action) {
      state.studForPagination = action.payload;
      state.students = action.payload;
    },
    [pageDecrement.rejected](state, action) {
      return state;
    },
    [filterArr](state, action) {
      state.students = action.payload;
    },
    [searchStudent.fulfilled](state, action) {
      state.students = action.payload;
    },
    [searchStudent.rejected](state, action) {
      return state;
    },
    [idForModal](state, action) {
      state.idForModal = Number(action.payload);
    },
    [arrArchive](state, action) {
      state.arrForArchive.push(action.payload);
    },
  },
});

export default authSlice.reducer;
