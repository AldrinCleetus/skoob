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

const BOOKMARKS_KEY = 'bookmark-skoob' as const;

export const addtoBookmark = createAsyncThunk(
  'bookmarkSlice/addBookmark',
  async (book: BasicBookDetails, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      console.log('interseing', state.bookmark.bookmarked);

      const currentBookmarkedItems = [...state.bookmark.bookmarked];
      currentBookmarkedItems.push(book);
      console.log('dd', currentBookmarkedItems);
      await AsyncStorage.setItem(
        BOOKMARKS_KEY,
        JSON.stringify(currentBookmarkedItems),
      );
      return book;
    } catch (e) {
      //   console.log(e);
      console.log('noooooo');
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const removeFromBookmark = createAsyncThunk(
  'bookmarkSlice/removeBookmark',
  async (book: BasicBookDetails, thunkAPI) => {
    try {
      //   const currentBooks = await thunkAPI.dispatch(getBookmarked());

      const bookmarkedBooks = await AsyncStorage.getItem(BOOKMARKS_KEY);

      if (bookmarkedBooks !== null) {
        let updatedBooks = JSON.parse(bookmarkedBooks) as BasicBookDetails[];

        updatedBooks = updatedBooks.filter(
          bookM => bookM.isbn13 !== book.isbn13,
        );

        await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updatedBooks));
        return updatedBooks;
      }
    } catch (e) {
      //   console.log(e);
      console.log('noooooo');
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const getBookmarked = createAsyncThunk(
  'bookmarkSlice/getBookmarked',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      //   console.log('get', state.bookmark);
      const bookmarkedBooks = await AsyncStorage.getItem(BOOKMARKS_KEY);
      if (bookmarkedBooks !== null) {
        return JSON.parse(bookmarkedBooks) as BasicBookDetails[];
      } else {
        throw 'failed';
      }
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const bookmarkSlice = createSlice({
  name: 'bookmarkSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addtoBookmark.fulfilled, (state, action) => {
        state.bookmarked.push(action.payload);
      })
      .addCase(getBookmarked.fulfilled, (state, action) => {
        state.bookmarked = action.payload;
        console.log('dddd', state.bookmarked);
      })
      .addCase(removeFromBookmark.fulfilled, (state, action) => {
        if (action.payload) {
          state.bookmarked = action.payload;
        }
        console.log('dddd', state.bookmarked);
      })

      .addCase(addtoBookmark.rejected, (state, action) => {
        // fix later
        state.bookmarked = [];
      })
      .addCase(getBookmarked.rejected, (state, action) => {
        // fix later
        state.bookmarked = [];
      });
  },
});

export default bookmarkSlice;
