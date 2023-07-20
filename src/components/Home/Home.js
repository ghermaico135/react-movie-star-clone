/** @format */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../MovieList/MovieList';

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movieAppReducer/movieSlice';

const Home = () => {
  const movieText = 'Harry';
  const seriesText = 'Friends';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img" />
      <MovieList />
    </div>
  );
};

export default Home;
