import React from 'react';
import OutletController from '../../components/OutletController';
import Weather from '../../components/Weather';
import Clock from '../../components/Clock';
import BussTimes from '../../components/BussTimes';

import styles from './style.scss';

export default() => (
  <div className={styles.main}>
    <div className={styles.leftBelt}>
      <Weather />
      <BussTimes />
    </div>
    <div className={styles.centerBelt}>
      <div className={styles.card}>
        <Clock />
      </div>
      <div className={styles.card}>
        &nbsp;
      </div>
    </div>
    <div className={styles.rightBelt}>
      <div className={styles.card}>
        &nbsp;
      </div>
      <div className={styles.card}>
        &nbsp;
      </div>
    </div>
  </div>
);
