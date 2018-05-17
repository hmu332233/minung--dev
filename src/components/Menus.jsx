import React from 'react';
import styles from '../styles/styles.scss';
import { Link } from 'react-router-dom';

var ghProjectName = window.location.pathname.split('/')[1];

class Menus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="nav flex-column">
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

export default Menus;