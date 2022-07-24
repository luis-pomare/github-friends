import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { name } = props;
  return (
    <section>
      <Link to="/details">logo</Link>
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="GitHub logo"
        width="70px"
      />
      <h2>{name}</h2>
      <p># followers</p>
    </section>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
