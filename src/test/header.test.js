import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Header from '../components/header';

describe('Header conditional tests', () => {
  test('Home header displayed', () => {
    render(
      <BrowserRouter>
        <Header caller="home" />
      </BrowserRouter>,
    );
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  test('Details header displayed', () => {
    render(
      <BrowserRouter>
        <Header caller="details" />
      </BrowserRouter>,
    );
    expect(document.querySelector('header')).toBeInTheDocument();
  });

  test('User header displayed', () => {
    render(
      <BrowserRouter>
        <Header caller="user" />
      </BrowserRouter>,
    );
    expect(document.querySelector('header')).toBeInTheDocument();
  });
});
