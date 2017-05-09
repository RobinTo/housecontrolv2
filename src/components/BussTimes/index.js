import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateBussTimes } from '../../redux/reducers/HouseControlReducer';

import styles from './style.scss';

function mapStateToProps(state) {
  return {
    bussTimes: state.housecontrol.bussTimes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBussTimes }, dispatch);
}

function createBussComponents(bussTimes) {
  return bussTimes.map((journey) => {
    const monitor = journey.MonitoredVehicleJourney;
    const minutesUntilArrival = parseInt(((new Date(monitor.MonitoredCall.ExpectedArrivalTime).getTime() - new Date().getTime()) / 1000 / 60).toFixed(0), 10);
    let dateString = '';
    if (minutesUntilArrival === 0) {
      dateString = 'Nå';
    } else if (minutesUntilArrival >= 15) {
      let hours = new Date(monitor.MonitoredCall.ExpectedArrivalTime).getHours();
      hours = hours < 10 ? `0${hours}` : hours;
      let minutes = new Date(monitor.MonitoredCall.ExpectedArrivalTime).getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      dateString = `${hours}:${minutes}`;
    } else {
      dateString = `${minutesUntilArrival} min`;
    }
    return (
      <div className={styles.main} key={journey.MonitoredVehicleJourney.VehicleJourneyName}>
        <div className={styles.name}>{monitor.PublishedLineName} {monitor.DestinationName}:</div> <div className={styles.time}>{dateString}</div>
      </div>
    );
  });
}

class BussTimes extends React.Component {

  constructor() {
    super();
    this._updateBussTimes = this._updateBussTimes.bind(this);
  }

  componentDidMount() {
    this.props.updateBussTimes();
    this.updateBussTimesInterval = setInterval(this._updateBussTimes, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.updateBussTimesInterval);
  }

  _updateBussTimes() {
    this.props.updateBussTimes();
  }

  render() {
    if (!this.props.bussTimes) {
      return null;
    }

    const bussTimesWest = this.props.bussTimes.filter(b => b.MonitoredVehicleJourney.DirectionRef === '1');
    const bussTimesEast = this.props.bussTimes.filter(b => b.MonitoredVehicleJourney.DirectionRef === '2');
    const slicedWest = bussTimesWest.slice(0, 3);
    const slicedEast = bussTimesEast.slice(0, 3);
    return (
      <div>
        {createBussComponents(slicedWest)}
        <br />
        {createBussComponents(slicedEast)}
      </div>
    );
  }
}

BussTimes.propTypes = {
  updateBussTimes: React.PropTypes.func.isRequired,
  bussTimes: React.PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(BussTimes);
