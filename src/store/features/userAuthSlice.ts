import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: UserAuthentication = {
  isUserLoggedIn: false,
  status: 'idle',
};

export type UserAuthentication = {
  isUserLoggedIn: boolean;
  status: 'idle' | 'pending' | 'suceeded' | 'failed';
};

export const checkIfUserLoggedIn = createAsyncThunk(
  'userAuthSlice/userLoggedIn',
  async (_, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      return token !== null; // Return true if token exists
    } catch (error) {
      console.error('Error checking logged in status:', error);
      return false;
    }
  },
);

const userAuthSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    setLoggedIn: state => {
      state.isUserLoggedIn = true;
      console.log('user logged in');
      state.status = 'suceeded';
    },
    setLoggedOut: state => {
      state.isUserLoggedIn = false;
      console.log('user logged out');

      state.status = 'idle';
    },
    setUserLoading: state => {
      state.isUserLoggedIn = false;
      console.log('user pending');

      state.status = 'pending';
    },
  },
});

export const {setLoggedIn, setLoggedOut, setUserLoading} =
  userAuthSlice.actions;

export default userAuthSlice;
