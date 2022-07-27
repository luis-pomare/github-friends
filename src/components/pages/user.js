import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFollowers } from '../../redux/reducers/followers';
import { getFollowings } from '../../redux/reducers/followings';
import { getUser } from '../../redux/reducers/user';
import { clearAll } from '../../redux/reducers/all';

const User = () => {
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const submitHandler = () => {
    dispatch(getFollowers('BregornOriginal'));
    dispatch(getFollowings('BregornOriginal'));
    dispatch(getUser('BregornOriginal'));
    dispatch(clearAll());
    setState('');
  };

  return (
    <>
      <Link to="/">back</Link>
      <h2>Please enter a valid GitHub user name:</h2>
      <input
        type="text"
        value={state}
        onChange={handleChange}
        name="userInput"
      />
      <button type="button" id="submitUser" onClick={submitHandler}>
        Submit
      </button>
    </>
  );
};

export default User;
