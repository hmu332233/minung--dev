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
    const menuElements = this.props.menus.map((menu) => {
      return (
        <li className="nav-item">
          <Link className="nav-link" to={`/${ghProjectName}${menu.link}`}>
            {menu.text}
          </Link>
        </li>
      );
    });
    
    return (
      <ul className={`nav flex-column ${styles.Menus}`}>
        <li className="nav-item">
          <Link class="nav-link active" to={`/${ghProjectName}`}>
            Home
          </Link>
        </li>
        {menuElements}
      </ul>
    );
  }
}

Menus.propTypes = {
  menus: PropTypes.array
};
Menus.defaultProps = {
  menus: [{
    text: 'KeyCode',
    link: '/keycode'
  }, {
    text: 'Docs',
    link: '/docs'
  }]
};

export default Menus;