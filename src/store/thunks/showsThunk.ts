import { createAsyncThunk } from '@reduxjs/toolkit';
import { IShow } from '../../types';
import axiosAPI from '../../api/axiosAPI.ts';
import { AxiosResponse } from 'axios';

export const fetchShows = createAsyncThunk<IShow[], string>
('shows/fetchShows', async (query: string) => {
  const response: AxiosResponse<{ show: IShow }[]> = await axiosAPI.get(`search/shows?q=${query}`);
  return response.data.map((result: { show: IShow }) => result.show);
});