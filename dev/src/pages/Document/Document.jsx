import React from 'react';
import PropTypes from 'prop-types';
import styles from './Document.scss';

import BasicLayout from 'components/BasicLayout';

class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <BasicLayout>
        <div className={styles.Document}>
          테스트
        </div>
      </BasicLayout>
    );
  }
}

Document.propTypes = {
};
Document.defaultProps = {
};

export default Document;