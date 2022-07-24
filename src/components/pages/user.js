import React from 'react';
import { Link } from 'react-router-dom';

const User = () => (
  <form>
    <Link to="/">back</Link>
    <h2>Please enter your GitHub user name:</h2>
    <input type="text" />
  </form>
);

export default User;
