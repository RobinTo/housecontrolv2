import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// Wrapping the app in AppContainer enables hot reload,
// this is automatically disabled in production mode.

import App from './ClientApp';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./ClientApp', () => { render(App); });
}
