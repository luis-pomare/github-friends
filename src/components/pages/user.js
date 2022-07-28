import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFollowers } from '../../redux/reducers/followers';
import { getFollowings } from '../../redux/reducers/followings';
import { getUser } from '../../redux/reducers/user';
import { clearAll } from '../../redux/reducers/all';
import storedUrl from '../../redux/url';
import '../../styles/user.css';

const { url } = storedUrl;

const User = () => {
  const [state, setState] = useState({
    user: '',
    errorClass: 'noVisible',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({ errorClass: 'noVisible', user: e.target.value });
  };

  const { user, errorClass } = state;

  const submitHandler = () => {
    const changeUser = () => {
      dispatch(getFollowers(user));
      dispatch(getFollowings(user));
      dispatch(getUser(user));
      dispatch(clearAll());
      setState({ ...state, user: '' });
    };

    const call = async () => {
      let response = await fetch(url + user);
      response = await response.json();
      if (response.id) {
        changeUser();
      } else {
        setState({ ...state, errorClass: 'visible' });
      }
    };
    call();
  };

  return (
    <>
      <Link to="/">back</Link>
      <h2>Please enter a valid GitHub user name:</h2>
      <input
        type="text"
        value={user}
        onChange={handleChange}
        name="userInput"
        placeholder="GitHub Login"
      />
      <button type="button" id="submitUser" onClick={submitHandler}>
        Submit
      </button>
      <div className={errorClass}>
        <p>Please submit a valid GitHub user name</p>
      </div>
    </>
  );
};

export default User;
