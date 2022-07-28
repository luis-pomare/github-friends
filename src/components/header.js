import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/header.css';

const HomeHeader = () => (
  <header>
    <nav>
      <i className="fa-solid fa-angle-left" />
      <Link to="/user" className="navLink">
        USER
      </Link>
    </nav>
    <p>Current GitHub Profile</p>
  </header>
);

const DetailsHeader = () => (
  <header>
    <nav>
      <i className="fa-solid fa-angle-left" />
      <Link to="/" className="navLink">
        HOME
      </Link>
    </nav>
    <p>Conection details</p>
  </header>
);

const UserHeader = () => (
  <header>
    <nav>
      <i className="fa-solid fa-angle-left" />
      <Link to="/" className="navLink">
        HOME
      </Link>
    </nav>
    <p>Change user</p>
  </header>
);

const Header = (props) => {
  const { caller } = props;
  switch (caller) {
    case 'home':
      return <HomeHeader />;
    case 'details':
      return <DetailsHeader />;
    case 'user':
      return <UserHeader />;
    default:
      return <HomeHeader />;
  }
};

Header.propTypes = {
  caller: PropTypes.string.isRequired,
};

export default Header;
