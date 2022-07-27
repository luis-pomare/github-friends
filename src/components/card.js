import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAll } from '../redux/reducers/all';
import { getFriend } from '../redux/reducers/friend';

const Card = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.all.length === 0) {
      dispatch(getAll(state));
    }
  });

  function handleClick() {
    dispatch(getFriend(name));
  }

  return (
    <section>
      <Link to="/details">
        <button type="button" onClick={handleClick}>
          =
        </button>
      </Link>
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
