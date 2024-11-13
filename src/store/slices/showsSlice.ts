import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchShows } from '../thunks/showsThunk.ts';
import { IShow } from '../../types';

interface ShowsState {
  allShows: IShow[];
  selectedShow: IShow | null;
  isLoading: boolean;
  error: boolean;
}

const initialState: ShowsState = {
  allShows: [],
  selectedShow: null,
  isLoading: false,
  error: false,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchShows.fulfilled, (state, action: PayloadAction<IShow[]>) => {
        state.allShows = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchShows.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  }
});

export const showsReducer = showsSlice.reducer;