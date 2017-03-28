import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postOutletCode } from '../../redux/reducers/HouseControlReducer';

import OnOff from '../OnOff';

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
    const outletComponents = this.props.outlets.map(outlet => <OnOff key={outlet.on} fn={this.outletOnClick} {...outlet} />);

    return (
      <div>
        { outletComponents }
      </div>
    );
  }
}

OutletController.propTypes = {
  outlets: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.number)).isRequired,
  postOutletCode: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OutletController);
