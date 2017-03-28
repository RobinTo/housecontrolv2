import React from 'react';


export default class AsyncRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this
      .props
      .loadingPromise
      .then((module) => {
        this.component = module.default;
        this.setState({ loaded: true });
      });
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return null;
  }
}

AsyncRoute.defaultProps = {
  props: { },
};

AsyncRoute.propTypes = {
  loadingPromise: React.PropTypes.object.isRequired, // eslint-disable-line
  props: React.PropTypes.object, // eslint-disable-line
  // These are a promise and an object of unknown shape
};
