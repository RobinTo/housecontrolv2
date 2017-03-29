import React from 'react';
import OutletController from '../../components/OutletController';
import Weather from '../../components/Weather';
import Clock from '../../components/Clock';

import styles from './style.scss';

export default() => (
  <div className={styles.main}>
    <div className={styles.leftBelt}>
    </div>
    <div className={styles.centerBelt}>
      <div className={styles.card}>
        <Clock />
      </div>
      <div className={styles.card}>
        <Weather />
      </div>
    </div>
    <div className={styles.rightBelt}>
      <div className={styles.card}>
        &nbsp;
      </div>
      <div className={styles.card}>
        <OutletController />
      </div>
    </div>
  </div>
);
