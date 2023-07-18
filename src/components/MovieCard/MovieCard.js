/** @format */

import React from "react";

const MovieCard = ({ data }) => {
	// const { data } = props;
	console.log(data);
	return (
		<div className="card-item">
			<div className="card-inner">
				<div className="card-top">
					<img src={data.Poster} alt={data.Title} />
				</div>
				<div className="card-bottom">
					<div className="card-info">
						<h1>{data.Title}</h1>
						<p>{data.Year}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
