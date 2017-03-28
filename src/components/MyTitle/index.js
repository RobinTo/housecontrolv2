import React from 'react';

import styles from './style.scss';

const Mytitle = props => (
  <div className={styles.main}>
    <h1 className={styles.title}>
      {props.title}
    </h1>
  </div>
);

Mytitle.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Mytitle;
