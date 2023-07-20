/** @format */

import React, { useEffect } from 'react';
import './MovieDetail.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchAsyncShowsDetails,
  getAllShowsDetails,
  removeSelectedShow,
} from '../../features/movieAppReducer/movieSlice';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const data = useSelector(getAllShowsDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncShowsDetails(imdbID));

    // cleaner action
    return () => {
      dispatch(removeSelectedShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div> ...Loading </div>
      ) : (
        <>
          <div className="left-section">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                {' '}
                IMDB Rating
                <i className="fa fa-star" />
                :
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes
                <i className="fa fa-thumbs-up" />
                :
                {data.imdbVotes}
              </span>
              <span>
                Runtime
                <i className="fa fa-film" />
                {' '}
                :
                {data.Runtime}
              </span>
              <span>
                <i className="fa fa-calendar" />
                :
                {data.Year}
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
        </>
      )}
    </div>
  );
};

export default MovieDetail;
