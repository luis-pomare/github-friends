import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import Home from '../components/pages/home';

describe('Home components mounted', () => {
  test('Featured component mounted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(document.getElementById('titleContainer')).toBeInTheDocument();
  });

  test('Filter component mounted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(document.getElementById('filter')).toBeInTheDocument();
  });

  test('Cards components mounted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(document.getElementById('cardsContainer')).toBeInTheDocument();
  });
});
