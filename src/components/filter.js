import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/reducers/filter';
import '../styles/filter.css';

const Featured = () => {
  const { followers, followings, all } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <form id="filter" onChange={handleChange}>
      <span className="category">
        <input
          type="radio"
          id="followers"
          name="conectionsFilter"
          value="followers"
          defaultChecked
        />
        <label htmlFor="followers">
          Followers
          {' ('}
          {followers.length}
          )
        </label>
      </span>
      <span className="category">
        <input
          type="radio"
          id="following"
          name="conectionsFilter"
          value="following"
        />
        <label htmlFor="following">
          Following
          {' ('}
          {followings.length}
          )
        </label>
      </span>
      <span className="category">
        <input type="radio" id="all" name="conectionsFilter" value="all" />
        <label htmlFor="all">
          All
          {' ('}
          {all.length}
          )
        </label>
      </span>
    </form>
  );
};

export default Featured;
