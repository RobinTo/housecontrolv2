import React from 'react';

import styles from './style.scss';

const OnOff = props => (
  <div className={styles.main}>
    <button className={styles.button1} onClick={() => { props.fn(props.on); }}>
      On
    </button>
    <button className={styles.button2} onClick={() => { props.fn(props.off); }}>
      Off
    </button>
  </div>
);

OnOff.propTypes = {
  fn: React.PropTypes.func.isRequired,
  on: React.PropTypes.number.isRequired,
  off: React.PropTypes.number.isRequired,
};

export default OnOff;
