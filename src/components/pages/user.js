import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [state, setState] = useState('');
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <form>
      <Link to="/">back</Link>
      <h2>Please enter your GitHub user name:</h2>
      <input type="text" value={state} onChange={handleChange} />
    </form>
  );
};

export default User;
