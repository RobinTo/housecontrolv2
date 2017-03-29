import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postOutletCode } from '../../redux/reducers/HouseControlReducer';

import OnOff from '../OnOff';

import styles from './style.scss';

function mapStateToProps(state) {
  return {
    outlets: state.housecontrol.outlets,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postOutletCode }, dispatch);
}

class OutletController extends React.Component {

  constructor() {
    super();
    this.outletOnClick = this.outletOnClick.bind(this);
  }

  outletOnClick(code) {
    this.props.postOutletCode(code);
  }

  render() {
    const outletComponents = this.props.outlets.map((outlet) => {
      return (
        <div key={outlet.on}>
          <span className={styles.outletName}>{outlet.name}</span>
          <OnOff fn={this.outletOnClick} {...outlet} />
        </div>
      );
    });

    return (
      <div className={styles.main}>
        { outletComponents }
      </div>
    );
  }
}

OutletController.propTypes = {
  outlets: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  postOutletCode: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OutletController);
