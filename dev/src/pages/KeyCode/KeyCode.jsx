import React from 'react';
import PropTypes from 'prop-types';
import styles from './KeyCode.scss';

import BasicLayout from 'components/BasicLayout';
import KeyCodeViewer from 'containers/KeyCodeViewer';

class KeyCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BasicLayout>
        <KeyCodeViewer />
      </BasicLayout>
    );
  }
}

KeyCode.propTypes = {};
KeyCode.defaultProps = {};

export default KeyCode;
