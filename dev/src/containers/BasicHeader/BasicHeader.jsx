import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicHeader.scss';

import useToggle from 'hooks/useToggle';

import Header from 'components/Header';
import HeaderNav from 'components/HeaderNav';

const MENUS = [
  {
    icon: 'home',
    name: 'Document',
    to: '/'
  }
];

function BasicHeader(props) {
  const [isOpen, toggler] = useToggle(false);
  
  return (
    <div className={styles.BasicHeader}>
      <Header togglerClickHandler={toggler} />
      <HeaderNav isOpen={isOpen} navMenus={MENUS} />
    </div>
  );
}

BasicHeader.propTypes = {};
BasicHeader.defaultProps = {};

export default BasicHeader;
