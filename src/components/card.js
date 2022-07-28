import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAll } from '../redux/reducers/all';
import { getFriend } from '../redux/reducers/friend';

const Card = (props) => {
  const { name, id } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { all, followers, followings } = state;

  useEffect(() => {
    if (all.length < followings.length || all.length < followers.length) {
      dispatch(getAll(state));
    }
  });

  function handleClick() {
    dispatch(getFriend(name));
  }

  return (
    <section>
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="GitHub logo"
        width="70px"
      />
      <Link to="/details">
        <button type="button" onClick={handleClick}>
          <i className="fa-solid fa-circle-arrow-right" />
        </button>
      </Link>
      <h2>{name}</h2>
      <p>
        User ID:
        {id}
      </p>
    </section>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
