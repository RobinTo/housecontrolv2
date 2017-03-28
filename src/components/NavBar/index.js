import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

export default () => (
  <ul className={styles.main} >
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/info'>Info</Link></li>
    <li><Link to='/about'>About</Link></li>
  </ul>
);
