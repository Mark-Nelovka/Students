import axios from 'axios';
// import Notiflix from 'notiflix';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://test-task-j.herokuapp.com/data';
const PARAMS = 'page=1&size=10';

const fetchStudent = createAsyncThunk(
  'students/fetchStudent',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`?${PARAMS}`);
      return data;
    } catch (error) {
      console.log(error);
      // if (error.message === 'Request failed with status code 400') {
      //   Notiflix.Notify.failure(
      //     'Некорректный email или слишком короткий пароль. Пароль должен содержать минимум 7 символов'
      //   );
      return thunkApi.rejectWithValue();
    }
  }
);

const pageIncrement = createAsyncThunk(
  'students/pageIncrement',
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get(`?page=${page}&size=10`);
      if (data.data.length == 0) {
        return thunkApi.rejectWithValue();
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue();
    }
  }
);

const pageDecrement = createAsyncThunk(
  'students/pageDecrement',
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get(`?page=${page}&size=10`);
      if (data.data.length == 0) {
        return thunkApi.rejectWithValue();
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue();
    }
  }
);

const searchStudent = createAsyncThunk(
  'students/search',
  async (info, thunkApi) => {
    try {
      const { data } = await axios.get(`?page=1&size=10&search=${info}`);
      console.log(data);
      if (data.data.length == 0) {
        return thunkApi.rejectWithValue();
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue();
    }
  }
);

const check = createAction('students/checked');

const countArchiveStudents = createAction('students/archive');

const clearAllStudents = createAction('students/clearAllSelected');

const filter = createAction('students/filter');

const filterArr = createAction('students/filterArr');

const idForModal = createAction('student/modal');

export {
  fetchStudent,
  check,
  countArchiveStudents,
  clearAllStudents,
  pageIncrement,
  pageDecrement,
  filter,
  filterArr,
  searchStudent,
  idForModal,
};
