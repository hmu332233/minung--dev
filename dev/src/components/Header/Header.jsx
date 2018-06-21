import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h6>minung--dev</h6>
      </div>
    );
  }
}


Header.propTypes = {
};
Header.defaultProps = {
};

export default Header;