import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card';
import { getFollowers } from '../../redux/reducers/followers';
import { getFollowings } from '../../redux/reducers/followings';
import { getUser } from '../../redux/reducers/user';

const Home = () => {
  const state = useSelector((state) => state);
  const { followers } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    if (followers.length === 0) {
      dispatch(getFollowers());
      dispatch(getFollowings());
      dispatch(getUser());
    }
  }, []);

  return (
    <main>
      {followers.map((follower) => (
        <Card key={follower.id} name={follower.login} />
      ))}
    </main>
  );
};

export default Home;
