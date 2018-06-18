import React from 'react';
import { connect } from 'react-redux';
import { change_keycode, change_key } from 'actions';

import styles from './KeyCodeViewer.scss';

class KeyCodeViewer extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    this.props.change_keycode(e.keyCode);
    this.props.change_key(e.key);
  }

  render() {
    return (
      <div className={styles.KeyCodeViewer} onKeyDown={this.handleKeyDown} tabIndex="0">
        <div>
          {this.props.keycode}
        </div>
        <div>
          {this.props.keyName}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    keycode: state.keycodeViewer.keycode,
    keyName: state.keycodeViewer.keyName
  };
};

let mapDispatchToProps = dispatch => {
  return {
    change_keycode: keycode => dispatch(change_keycode(keycode)),
    change_key: key => dispatch(change_key(key))
  };
};

KeyCodeViewer = connect(mapStateToProps, mapDispatchToProps)(KeyCodeViewer);

export default KeyCodeViewer;