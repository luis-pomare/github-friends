import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/reducers/filter';

const Featured = () => {
  const { followers, followings, all } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <form onChange={handleChange}>
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
      <br />
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
      <br />
      <input type="radio" id="all" name="conectionsFilter" value="all" />
      <label htmlFor="all">
        All conections
        {' ('}
        {all.length}
        )
      </label>
    </form>
  );
};

export default Featured;
