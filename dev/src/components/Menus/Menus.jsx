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
      const isActived = menu.text === this.props.activeMenu;
      return (
        <li className="nav-item">
          <Link className={`nav-link ${styles.Menus__item} ${isActived ? 'active' : ''}`} to={`/${ghProjectName}${menu.link}`}>
            {menu.text}
          </Link>
        </li>
      );
    });
    
    return (
      <div className={styles.Menus}>
        <div className="container">
          <ul className={`nav nav-tabs border-0`}>
            {menuElements}
          </ul>
        </div>
      </div>
    );
  }
}

Menus.propTypes = {
  activeMenu: PropTypes.string,
  menus: PropTypes.array
};
Menus.defaultProps = {
  activeMenu: 'Home',
  menus: [{
    text: 'Home',
    link: '/'
  }, {
    text: 'KeyCode',
    link: '/keycode'
  }, {
    text: 'Docs',
    link: '/docs'
  }]
};

export default Menus;