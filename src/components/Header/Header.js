/** @format */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import './Header.scss';

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movieAppReducer/movieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term.length === null) return null;
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    return setTerm('');
  };

  return (
    <div className="header">
      <div className="log">
        {' '}
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="search Movies or shows"
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
