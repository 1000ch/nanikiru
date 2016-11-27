import React from 'react';
import ReactDOM from 'react-dom';
import { createElementWithContext } from 'fluxible-addons-react';
import app from './app';

window.React = React;
window.ReactDOM = ReactDOM;

app.rehydrate(window.__CONTEXT__, (error, context) => {
  if (error) {
    throw error;
  }

  const reactElement = createElementWithContext(context);
  const mountNode = document.getElementById('app');

  ReactDOM.render(reactElement, mountNode);
});
