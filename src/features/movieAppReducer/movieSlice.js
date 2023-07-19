/** @format */

/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/ApiKeys/MovieApi";
import { ApiKey } from "../../common/ApiKeys/MovieApikeys";

export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async () => {
		const movieText = "Harry";
		const response = await movieApi.get(
			`?apiKey=${ApiKey}&s=${movieText}&type=movie`
		);
		return response.data;
	}
);

//shows
export const fetchAsyncShows = createAsyncThunk(
	"movies/fetchAsyncShows",
	async () => {
		const seriesText = "Friends";
		const response = await movieApi.get(
			`?apiKey=${ApiKey}&s=${seriesText}&type=series`
		);
		return response.data;
	}
);

// showDetails

export const fetchAsyncShowsDetails = createAsyncThunk(
	"movies/fetchAsyncShowsDetails",
	async (id) => {
		const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&plot=full`);
		return response.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
	showDetail: {},
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log("pending");
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("Successfully fetched");
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log("Rejected");
		},
		// shows series
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log("Successfully fetched");
			return { ...state, shows: payload };
		},
		[fetchAsyncShowsDetails.fulfilled]: (state, { payload }) => {
			console.log("Successfully fetched");
			return { ...state, showDetail: payload };
		},
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllShowsDetails = (state) => state.movies.showDetail;
export default movieSlice.reducer;
