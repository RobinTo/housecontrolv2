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
    let hours = this.state.clock.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = this.state.clock.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return (
      <div className={styles.main}>
        {hours}:{minutes}
      </div>
    );
  }
}
