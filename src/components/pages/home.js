import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card';

const Home = () => {
  const friends = useSelector((state) => state.friends);
  console.log(friends);
  return (
    <main>
      <Card />
    </main>
  );
};

export default Home;
