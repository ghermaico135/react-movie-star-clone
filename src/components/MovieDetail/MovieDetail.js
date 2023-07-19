/** @format */
/* eslint-disable */

import React, { useEffect } from "react";
import "./MovieDetail.scss";

import {
	fetchAsyncShowsDetails,
	getAllShowsDetails,
} from "../../features/movieAppReducer/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
useParams;
fetchAsyncShowsDetails;

const MovieDetail = () => {
	const { imdbID } = useParams();
	const data = useSelector(getAllShowsDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncShowsDetails(imdbID));
	}, [dispatch, imdbID]);

	return (
		<div className="movie-section">
			<div className="left-section">
				<div className="movie-title">{data.Title}</div>
				<div className="movie-rating">
					<span>
						{" "}
						IMDB Rating
						<i className="fa fa-star"></i>:{data.imdbRating}
					</span>
					<span>
						IMDB Votes<i className="fa fa-thumbs-up"></i>:{data.imdbVotes}
					</span>
					<span>
						Runtime<i className="fa fa-film"></i> :{data.Runtime}
					</span>
					<span>
						<i className="fa fa-calendar"></i>:{data.Year}
					</span>
				</div>
				<div className="movie-plot">{data.Plot}</div>
				<div className="movie-info">
					<div>
						<span>Director</span>
						<span>{data.Director}</span>
					</div>
					<div>
						<span>Stars</span>
						<span>{data.Actors}</span>
					</div>
					<div>
						<span>Generes</span>
						<span>{data.Genre}</span>
					</div>
					<div>
						<span>Languages</span>
						<span>{data.Language}</span>
					</div>
					<div>
						<span>Awards</span>
						<span>{data.Awards}</span>
					</div>
				</div>
			</div>
			<div className="right-section">
				<img src={data.Poster} alt={data.Title} />
			</div>
		</div>
	);
};

export default MovieDetail;
