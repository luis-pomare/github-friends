import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section>
    <Link to="/details">logo</Link>
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      alt="GitHub logo"
      width="70px"
    />
    <h2>user name</h2>
    <p># followers</p>
  </section>
);

export default Home;
