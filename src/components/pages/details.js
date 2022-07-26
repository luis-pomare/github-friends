import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const state = useSelector((state) => state);

  return (
    <main>
      <h2>{state.friend.login}</h2>
    </main>
  );
};

export default Details;
