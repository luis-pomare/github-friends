import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeHeader = () => (
  <header>
    <nav>
      <i className="fa-solid fa-angle-left" />
      <Link to="/user">USER</Link>
    </nav>
    <p>Your GitHub Profile</p>
  </header>
);

const DetailsHeader = () => (
  <header>
    <nav>
      <Link to="/">HOME</Link>
    </nav>
    <p>Conection details</p>
  </header>
);

const Header = (props) => {
  const { caller } = props;
  return caller === 'home' ? <HomeHeader /> : <DetailsHeader />;
};

Header.propTypes = {
  caller: PropTypes.string.isRequired,
};

export default Header;
