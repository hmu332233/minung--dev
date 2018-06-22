import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.Header}>
        <div className="container">
          <h5 className={styles.Header__title}>minung--dev</h5>
        </div>
      </div>
    );
  }
}


Header.propTypes = {
};
Header.defaultProps = {
};

export default Header;