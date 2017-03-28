import React from 'react';

const OnOff = props => (
  <div>
    <button onClick={() => { props.fn(props.on); }}>
      On
    </button>
    <button onClick={() => { props.fn(props.off); }}>
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
