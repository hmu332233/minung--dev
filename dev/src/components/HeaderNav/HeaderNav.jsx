import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderNav.scss';

import { NavLink } from 'react-router-dom';
import { Collapse } from 'reactstrap';

const HeaderNav = React.memo(props => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg order-lg-first">
          <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
            {props.navMenus.map(menu => (
              <li className="nav-item" key={menu.name}>
                <NavLink
                  exact
                  to={menu.to}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={`fe fe-${menu.icon}`} /> {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

const HeaderNavWrapper = ({ isOpen, ...props }) => {
  return (
    <Collapse className={'header d-lg-flex p-0'} isOpen={isOpen}>
      <HeaderNav {...props} />
    </Collapse>
  );
};

HeaderNavWrapper.propTypes = {
  isOpen: PropTypes.bool,
  navMenus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
      to: PropTypes.string
    })
  )
};
HeaderNavWrapper.defaultProps = {
  isOpen: false,
  navMenus: []
};

export default HeaderNavWrapper;
