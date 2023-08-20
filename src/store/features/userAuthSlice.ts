import {createSlice} from '@reduxjs/toolkit';

const initialState: UserAuthentication = {
  isUserLoggedIn: false,
  status: 'idle',
};

export type UserAuthentication = {
  isUserLoggedIn: boolean;
  status: 'idle' | 'pending' | 'suceeded' | 'failed';
};

const userAuthSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    setLoggedIn: state => {
      state.isUserLoggedIn = true;
      state.status = 'suceeded';
    },
    setLoggedOut: state => {
      state.isUserLoggedIn = false;
      state.status = 'idle';
    },
    setUserLoading: state => {
      state.isUserLoggedIn = false;
      state.status = 'pending';
    },
  },
});

export const {setLoggedIn, setLoggedOut, setUserLoading} =
  userAuthSlice.actions;

export default userAuthSlice;
