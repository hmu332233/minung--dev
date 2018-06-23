import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicLayout.scss';

import Header from 'components/Header';
import Menus from 'components/Menus';

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.BasicLayout}>
        <Header />
        <Menus activeMenu={this.props.activeMenu}/>
        <div className={styles.BasicLayout__contents}>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


BasicLayout.propTypes = {
};
BasicLayout.defaultProps = {
};

export default BasicLayout;