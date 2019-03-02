import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Loader = React.memo(props => {
  return (
    <div
      className={cx({ LoaderWrapper: true }, { centered: this.props.centered })}
    >
      <div className={styles.Loader} />
    </div>
  );
});

Loader.propTypes = {
  centered: PropTypes.bool
};
Loader.defaultProps = {
  centered: false
};

export default Loader;
