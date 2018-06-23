import React from 'react';
import styles from '../styles/styles.scss';
import { Menus } from '../components';
import { BasicLayout } from 'containers';

class Custom  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasicLayout>
        <div>path: {this.props.match.params.path}</div>
      </BasicLayout>
    );
  }
}

export default Custom;