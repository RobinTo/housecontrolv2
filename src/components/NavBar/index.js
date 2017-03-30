import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

export default class NavBar extends React.Component {

  constructor() {
    super();
    this.state = {
      expanded: false,
    };

    this._toggle = this._toggle.bind(this);
  }

  _toggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return (
      <div className={styles.main + (!this.state.expanded ? '' : ` ${styles.expanded}`)} >
        <button onClick={this._toggle} className={styles.expand + (!this.state.expanded ? '' : ` ${styles.hidden}`)}>
          MENU
        </button>
        <div className={styles.menu + (this.state.expanded ? '' : ` ${styles.hidden}`)}>
          <ul>
            <li><Link to='/'>Hjem</Link></li>
            <li><Link to='/video'>Video</Link></li>
            <li><Link to='/images'>Bilder</Link></li>
            <li><Link to='/controls'>Kontroll</Link></li>
            <li><button className={styles.close} onClick={this._toggle}>Close</button></li>
          </ul>
        </div>
      </div>
    );
  }
}
