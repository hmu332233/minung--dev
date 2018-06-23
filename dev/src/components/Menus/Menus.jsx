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
        <li className="nav-item pl-0">
          <Link className={`nav-link ${styles.Menus__item}`} to={`/${ghProjectName}${menu.link}`}>
            {menu.text}
          </Link>
        </li>
      );
    });
    
    return (
      <div className={styles.Menus}>
        <div className="container">
          <ul className={`nav`}>
            <li className="nav-item pl-0">
              <Link className={`nav-link active ${styles.Menus__item}`} to={`/${ghProjectName}`}>
                Home
              </Link>
            </li>
            {menuElements}
          </ul>
        </div>
      </div>
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