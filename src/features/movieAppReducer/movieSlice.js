/** @format */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/ApiKeys/MovieApi';
import { ApiKey } from '../../common/ApiKeys/MovieApikeys';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    // const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${ApiKey}&s=${term}&type=movie`,
    );
    return response.data;
  },
);

// shows
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    // const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${ApiKey}&s=${term}&type=series`,
    );
    return response.data;
  },
);

// showDetails

export const fetchAsyncShowsDetails = createAsyncThunk(
  'movies/fetchAsyncShowsDetails',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&plot=full`);
    return response.data;
  },
);

const initialState = {
  movies: {},
  shows: {},
  showDetail: {},
  isLoading: false,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedShow: (state) => {
      state.showDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      // return (state.isLoading = true);
      // console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => ({
      ...state,
      movies: payload,
    }),
    [fetchAsyncMovies.rejected]: () => {
      // console.log('Rejected');
    },
    // shows series
    [fetchAsyncShows.fulfilled]: (state, { payload }) => ({
      ...state,
      shows: payload,
    }),
    // console.log('Successfully fetched');

    [fetchAsyncShowsDetails.fulfilled]: (state, { payload }) => ({
      ...state,
      showDetail: payload,
    }),
    // console.log('Successfully fetched');
  },
});

export const { removeSelectedShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllShowsDetails = (state) => state.movies.showDetail;
export default movieSlice.reducer;
