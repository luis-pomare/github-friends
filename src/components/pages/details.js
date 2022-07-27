import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header';

const Details = () => {
  const { friend } = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let shortedDate = friend.created_at;
  if (shortedDate) {
    shortedDate = shortedDate.slice(0, 10);
  }

  return (
    <>
      <Header caller="details" />
      <main>
        <span>
          <img src={friend.avatar_url} alt="Friends avatar" />
          <h2>{friend.login}</h2>
          <p>
            {friend.followers}
            {' '}
            followers
          </p>
        </span>
        <h4>Friend information:</h4>
        <span>
          <h3>Following</h3>
          <p>{friend.following}</p>
        </span>
        <span>
          <h3>Active since</h3>
          <p>{shortedDate}</p>
        </span>
        <span>
          <h3>Public repositiries</h3>
          <p>{friend.public_repos}</p>
        </span>
        <span>
          <h3>Public Gists</h3>
          <p>{friend.public_gists}</p>
        </span>
        <span>
          <h3>Public profile</h3>
          <a href={friend.html_url} target="_blank" rel="noreferrer">
            {friend.login}
          </a>
        </span>
      </main>
    </>
  );
};

export default Details;
