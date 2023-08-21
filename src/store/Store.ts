import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import booksSlice from './features/bookSlice';
import userAuthSlice from './features/userAuthSlice';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bookmarkSlice from './features/bookmarkSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  booksFromApi: booksSlice.reducer,
  userAuth: userAuthSlice.reducer,
  bookmark: persistReducer(persistConfig, bookmarkSlice.reducer),
});

const customMiddleware = [thunk]; // Add any other middleware you need

const Store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
