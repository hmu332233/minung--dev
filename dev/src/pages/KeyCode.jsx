import React from 'react';
import styles from '../styles/styles.scss';
import { connect } from 'react-redux';
import { CountView } from '../components';
import { increment } from '../actions';
import { BasicLayout, KeyCodeViewer } from 'containers';

class KeyCode  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasicLayout>
        <KeyCodeViewer />
      </BasicLayout>
    );
  }
}

export default KeyCode;