import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card';
import { getFriends } from '../../redux/reducers/friends';
import { getFollowers } from '../../redux/reducers/followers';
import storedUrl from '../../redux/url';

const { url, followersUrl } = storedUrl;

const Home = () => {
  const { friends, followers } = useSelector((state) => state);
  const dispatch = useDispatch();

  function test() {
    console.log(friends, followers);
  }

  useEffect(() => {
    dispatch(getFollowers('KaskMIL'));
    if (friends.length === 0) {
      const call = async (user = 'luis-pomare') => {
        let response = await fetch(url + user + followersUrl);
        response = await response.json();
        dispatch(getFriends(response));
      };
      call();
    }
  }, []);

  return (
    <main>
      <button type="button" onClick={test}>
        test
      </button>
      {friends.map((friend) => (
        <Card key={friend.id} name={friend.login} />
      ))}
    </main>
  );
};

export default Home;
