/** @format */
/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieAppReducer/movieSlice";

export const store = configureStore({
	reducer: {
		movies: movieReducer,
	},
});
