import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './Menus.scss';

const ghProjectName = window.location.pathname.split('/')[1];

class Menus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={`nav flex-column ${styles.Menus}`}>
        <li className="nav-item">
          <Link class="nav-link active" to={`/${ghProjectName}`}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/${ghProjectName}/keycode`}>
            KeyCode
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/${ghProjectName}/custom`}>
            Custom
          </Link>
        </li>
      </ul>
    );
  }
}

Menus.propTypes = {
};
Menus.defaultProps = {
};

export default Menus;