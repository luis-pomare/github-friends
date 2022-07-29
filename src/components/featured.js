import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/featured.css';

const Featured = () => {
  const { user } = useSelector((state) => state);

  return (
    <section className="dotedBackground featured">
      <img src={user.avatar_url} alt="avatar" width="100px" />
      <span id="titleContainer">
        <h2>{user.login}</h2>
        <p>
          {user.followers}
          {' '}
          Followers
        </p>
      </span>
    </section>
  );
};

export default Featured;
