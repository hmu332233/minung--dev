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
      <div>
        <ul>
          <li>
            <Link to={`/${ghProjectName}`}>Home</Link>
          </li>
          <li>
            <Link to={`/${ghProjectName}/keycode`}>KeyCode</Link>
          </li>
          <li>
            <Link to={`/${ghProjectName}/custom`}>Custom</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Menus;