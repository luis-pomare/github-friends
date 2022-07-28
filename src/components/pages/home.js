import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card';
import { getFollowers } from '../../redux/reducers/followers';
import { getFollowings } from '../../redux/reducers/followings';
import { getUser } from '../../redux/reducers/user';
import Featured from '../featured';
import Header from '../header';
import Filter from '../filter';

const Home = () => {
  const state = useSelector((state) => state);
  const {
    followers, followings, all, filter,
  } = state;
  let friends = followers;
  switch (filter) {
    case 'followers':
      friends = followers;
      break;
    case 'following':
      friends = followings;
      break;
    case 'all':
      friends = all;
      break;
    default:
      friends = followers;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (followers.length === 0) {
      dispatch(getFollowers());
      dispatch(getFollowings());
      dispatch(getUser());
    }
  }, []);

  return (
    <>
      <Header caller="home" />
      <Featured />
      <main>
        <Filter />
        {friends.map((friend) => (
          <Card key={friend.id} name={friend.login} id={friend.id} />
        ))}
      </main>
    </>
  );
};

export default Home;
