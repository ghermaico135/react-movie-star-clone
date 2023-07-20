/** @format */
/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import {
	getAllMovies,
	getAllShows,
} from "../../features/movieAppReducer/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = () => {
	const movies = useSelector(getAllMovies);
	const shows = useSelector(getAllShows);
	let renderMovies,
		renderShows = "";

	renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, index) => (
				<MovieCard key={index} data={movie} />
			))
		) : (
			<div className="movie-error">
				<h3>{movies.Error}</h3>
			</div>
		);
	// render shows
	renderShows =
		shows.Response === "True" ? (
			shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
		) : (
			<div className="movie-error">
				<h3>{shows.Error}</h3>
			</div>
		);

	console.log(renderMovies);
	return (
		<div className="movie-wrapper">
			<div className="movie-list">
				<h2>Movies</h2>
				<div className="movie-container">{renderMovies}</div>
			</div>
			<div className="show-list">
				<h2>Shows</h2>
				<div className="movie-container">{renderShows}</div>
			</div>
		</div>
	);
};

export default MovieList;
