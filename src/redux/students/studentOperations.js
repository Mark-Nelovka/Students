import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchStudent = createAsyncThunk(
  'auth/register',
  async (item, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', item);
      Notiflix.Notify.success(`Вы зарегестрировались как ${item.name}`);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 400') {
        Notiflix.Notify.failure(
          'Некорректный email или слишком короткий пароль. Пароль должен содержать минимум 7 символов'
        );
        return thunkApi.rejectWithValue();
      }
    }
  }
);

export { fetchStudent };
