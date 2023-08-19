import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_BASE_URL} from '../../utils/contants';
import {BookState, BooksApiResponse} from '../../types/types';

const responseDefaultValue: BooksApiResponse = {
  error: '',
  total: '',
  books: [],
};

const initialState: BookState = {
  status: 'idle',
  response: responseDefaultValue,
};

export const getNewBooksFromAPI = createAsyncThunk(
  'books/newBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_BASE_URL + '/new');

      const data = response.data as BooksApiResponse;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewBooksFromAPI.fulfilled, (state, action) => {
        state.response = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getNewBooksFromAPI.pending, state => {
        state.status = 'pending';
      })
      .addCase(getNewBooksFromAPI.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default booksSlice;
