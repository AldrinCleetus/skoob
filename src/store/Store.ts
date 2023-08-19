import {configureStore} from '@reduxjs/toolkit';
import booksSlice from './features/bookSlice';

const Store = configureStore({
  reducer: {
    booksFromApi: booksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
