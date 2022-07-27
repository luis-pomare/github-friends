import React from 'react';
import { useSelector } from 'react-redux';

const Featured = () => {
  const { followers, followings, all } = useSelector((state) => state);
  return (
    <form>
      <input
        type="radio"
        id="followers"
        name="conectionsFilter"
        value="followers"
        checked
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
