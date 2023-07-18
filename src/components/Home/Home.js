/** @format */

import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import movieApi from "../../common/ApiKeys/MovieApi";
import { ApiKey } from "../../common/ApiKeys/MovieApikeys";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movieAppReducer/movieSlice";

const Home = () => {
	const movieText = "Harry";
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await movieApi
				.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
				.catch((err) => {
					console.log("Err :", err);
				});
			dispatch(addMovies(response.data));
		};

		fetchMovies();
	}, [dispatch]);
	return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
};

export default Home;
