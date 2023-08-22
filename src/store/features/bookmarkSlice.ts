import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BasicBookDetails} from '../../types/types';

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
    addtoBookmark: (state, action: PayloadAction<BasicBookDetails>) => {
      state.bookmarked.push(action.payload);
    },
    removeFromBookmark: (state, action: PayloadAction<BasicBookDetails>) => {
      state.bookmarked = state.bookmarked.filter(
        book => book.isbn13 !== action.payload.isbn13,
      );
    },
  },
});

export const {addtoBookmark, removeFromBookmark} = bookmarkSlice.actions;

export default bookmarkSlice;
