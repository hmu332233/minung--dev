import React from 'react';
import styles from '../styles/styles.scss';
import { connect } from 'react-redux';
import { CountView } from '../components';
import { KeyCodeViewer } from '../containers';
import { increment } from '../actions';
import { Menus } from '../components';

class KeyCode  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100vh'}}>
        <Menus />
        <KeyCodeViewer />
      </div>
    );
  }
}

export default KeyCode;