import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card';
import { getFriends } from '../../redux/reducers/friends';
import urlStore from '../../redux/url';

const { url, followers } = urlStore;

const Home = () => {
  const friends = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  console.log(friends);

  useEffect(() => {
    if (friends.length === 0) {
      const call = async (user = 'luis-pomare') => {
        let response = await fetch(url + user + followers);
        response = await response.json();
        dispatch(getFriends(response));
        console.log(friends);
      };
      call();
    }
    console.log(friends);
  }, []);

  return (
    <main>
      <Card />
    </main>
  );
};

export default Home;
