import React from 'react';
import { useSelector } from 'react-redux';

const Featured = () => {
  const { user } = useSelector((state) => state);

  return (
    <section>
      <h3>Current user</h3>
      <img src={user.avatar_url} alt="avatar" width="100px" />
      <h2>{user.login}</h2>
      <p>
        {user.followers}
        {' '}
        Followers
      </p>
    </section>
  );
};

export default Featured;
