import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card';
import { getFriends } from '../../redux/reducers/friends';
import urlStore from '../../redux/url';

const { url, followers } = urlStore;

const Home = () => {
  const friends = useSelector((state) => state.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    if (friends.length === 0) {
      const call = async (user = 'luis-pomare') => {
        let response = await fetch(url + user + followers);
        response = await response.json();
        dispatch(getFriends(response));
      };
      call();
    }
  }, []);

  return (
    <main>
      {friends.map((friend) => (
        <Card key={friend.id} name={friend.login} />
      ))}
    </main>
  );
};

export default Home;
