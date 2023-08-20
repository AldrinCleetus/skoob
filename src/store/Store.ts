import {configureStore} from '@reduxjs/toolkit';
import booksSlice from './features/bookSlice';
import userAuthSlice from './features/userAuthSlice';

const Store = configureStore({
  reducer: {
    booksFromApi: booksSlice.reducer,
    userAuth: userAuthSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
