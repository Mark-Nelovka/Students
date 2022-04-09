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
      return data.data;
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

const check = createAction('students/checked');

const countArchiveStudents = createAction('students/archive');

const clearAllStudents = createAction('students/clearAllSelected');

export { fetchStudent, check, countArchiveStudents, clearAllStudents };
