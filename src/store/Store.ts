import {configureStore} from '@reduxjs/toolkit';
import booksSlice from './features/bookSlice';
import userAuthSlice from './features/userAuthSlice';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bookmarkSlice from './features/bookmarkSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  booksFromApi: booksSlice.reducer,
  userAuth: userAuthSlice.reducer,
  bookmark: persistReducer(persistConfig, bookmarkSlice.reducer),
});

const Store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default Store;
