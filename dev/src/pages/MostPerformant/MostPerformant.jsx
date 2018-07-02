import React from 'react';
import PropTypes from 'prop-types';
import styles from './MostPerformant.scss';

import { BasicLayout } from 'containers';

class MostPerformant extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BasicLayout activeMenu="MostPerformant">
        sss
      </BasicLayout>
    );
  }
}

MostPerformant.propTypes = {};
MostPerformant.defaultProps = {};

export default MostPerformant;