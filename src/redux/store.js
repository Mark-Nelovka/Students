import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from './students/studentsSlice';
const store = configureStore({
  reducer: {
    students: studentsSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
