import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header';
import '../../styles/details.css';

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
        <span className="friendHeadingContainer featured dotedBackground">
          <img
            src={friend.avatar_url}
            alt="Friends avatar"
            className="detailImage"
          />
          <div className="titleContainer">
            <h2>{friend.login}</h2>
            <p>
              {friend.followers}
              {' '}
              followers
            </p>
          </div>
        </span>
        <h4>Friend information:</h4>
        <div id="infoContainer" className="dotedBackground">
          <span className="detailCard">
            <h3>Following</h3>
            <p>{friend.following}</p>
          </span>
          <span className="detailCard">
            <h3>Active since</h3>
            <p>{shortedDate}</p>
          </span>
          <span className="detailCard">
            <h3>Public repositiries</h3>
            <p>{friend.public_repos}</p>
          </span>
          <span className="detailCard">
            <h3>Public Gists</h3>
            <p>{friend.public_gists}</p>
          </span>
          <span className="detailCard">
            <h3>Public profile</h3>
            <a href={friend.html_url} target="_blank" rel="noreferrer">
              {friend.login}
            </a>
          </span>
        </div>
      </main>
    </>
  );
};

export default Details;
