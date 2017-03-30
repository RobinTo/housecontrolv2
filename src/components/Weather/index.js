import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { weatherCodeToDesc, weatherCodeToIcon } from './config';
import { updateWeather } from '../../redux/reducers/HouseControlReducer';

import styles from './style.scss';

function mapStateToProps(state) {
  return {
    weather: state.housecontrol.weather,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateWeather }, dispatch);
}

class Weather extends React.Component {

  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  componentDidMount() {
    this.props.updateWeather();
    this.updateWeatherInterval = setInterval(this._onClick, 600000);
  }

  componentWillUnmount() {
    clearInterval(this.updateWeatherInterval);
  }

  _onClick() {
    this.props.updateWeather();
  }

  render() {
    if (!this.props.weather) {
      return <div>Loading...</div>;
    }

    const weather = this.props.weather.weather[0];
    const weatherIcon = weatherCodeToIcon[weather.id];
    const weatherDesc = weatherCodeToDesc[weather.id];
    return (
      <button className={styles.main} onClick={this._onClick}>
        <div className={styles.infoContainer}>
          <span className={styles.temp}>{Math.round(this.props.weather.main.temp)}&deg;</span>
          <i className={`${styles.icon} wi ${weatherIcon}`} />
        </div>
        <div className={styles.desc}>{weatherDesc}</div>
      </button>
    );
  }
}

Weather.propTypes = {
  updateWeather: React.PropTypes.func.isRequired,
  weather: React.PropTypes.object,
};

Weather.defaultProps = {
  weather: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
