import React from 'react';

import styles from './style.scss';

export default class Clock extends React.Component {

  constructor() {
    super();
    this.state = {
      clock: new Date(),
    };
    this._updateClock = this._updateClock.bind(this);
  }

  componentDidMount() {
    this._clockTimeout = setInterval(this._updateClock, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this._clockTimeout);
  }

  _updateClock() {
    this.setState({
      clock: new Date(),
    });
  }

  render() {
    return (
      <div className={styles.main}>
        {this.state.clock.getHours()}:{this.state.clock.getMinutes()}
      </div>
    );
  }
}
