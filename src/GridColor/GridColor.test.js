import React from 'react';
import ReactDOM from 'react-dom';
import GridNavigation from './GridNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridNavigation />, div);
});
