import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">USER</Link>
    </nav>
    <input type="text" placeholder="Search by name" />
  </header>
);

export default Header;
