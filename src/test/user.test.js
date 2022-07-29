import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import User from '../components/pages/user';

describe('Select user components mounted', () => {
  test('User title components mounted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <User />
        </BrowserRouter>
      </Provider>,
    );
    expect(document.getElementById('userTitle')).toBeInTheDocument();
  });

  test('User input components mounted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <User />
        </BrowserRouter>
      </Provider>,
    );
    expect(document.getElementById('userInput')).toBeInTheDocument();
  });

  test('User button components mounted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <User />
        </BrowserRouter>
      </Provider>,
    );
    expect(document.getElementById('submitUser')).toBeInTheDocument();
  });
});
