import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Routes from './routes/client';
import NavBar from './components/NavBar';

import styles from './AppStyle.scss';

const myStore = store();
export default () => (
  <Provider store={myStore}>
    <div className={styles.main}>
      <NavBar />
      <div>
        <Routes />
      </div>
    </div>
  </Provider>
);
