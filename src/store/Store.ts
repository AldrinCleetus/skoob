import {configureStore} from '@reduxjs/toolkit';
import booksSlice from './features/bookSlice';
import userAuthSlice from './features/userAuthSlice';
import bookmarkSlice from './features/bookmarkSlice';

const Store = configureStore({
  reducer: {
    booksFromApi: booksSlice.reducer,
    userAuth: userAuthSlice.reducer,
    bookmark: bookmarkSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
