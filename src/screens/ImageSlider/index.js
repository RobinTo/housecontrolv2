import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getImageList } from '../../redux/reducers/HouseControlReducer';

import styles from './style.scss';

function mapStateToProps(state) {
  return {
    imageList: state.housecontrol.imageList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getImageList }, dispatch);
}

class ImageSlider extends React.Component {

  constructor() {
    super();

    this.state = {
      index: 0,
    };

    this._changeImage = this._changeImage.bind(this);
  }

  componentDidMount() {
    this.props.getImageList();
    this.changeImageInterval = setInterval(this._changeImage, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.changeImageInterval);
  }

  _changeImage() {
    const newIndex = (this.state.index + 1 >= this.props.imageList.length ? 0 : this.state.index + 1);
    this.setState({
      index: newIndex,
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <img className={styles.image} alt='Personal' src={`/sliderimages/${this.props.imageList[this.state.index]}`} />
      </div>
    );
  }
}

ImageSlider.propTypes = {
  getImageList: React.PropTypes.func.isRequired,
  imageList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider);
