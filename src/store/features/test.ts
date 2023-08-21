import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BasicBookDetails} from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '../Store';

const initialState: BookmarkState = {
  bookmarked: [],
};

export type BookmarkState = {
  bookmarked: BasicBookDetails[];
};

const bookmarkSlice = createSlice({
  name: 'bookmarkSlice',
  initialState,
  reducers: {
    addtoBookmark: (state, action) => {
      state.bookmarked.push(action.payload);
    },
    rremoveFromBookmark: (state, action) => {
      if (action.payload) {
        state.bookmarked = action.payload;
      }
      console.log('dddd', state.bookmarked);
    },
  },
});

export default bookmarkSlice;
