import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles.css';
import { change_keycode, change_key } from '../actions';
import Tabs from '../components/Tabs.jsx';

class App extends React.Component {
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
      <div>
        <Tabs />
        <div className={styles.blue} onKeyDown={this.handleKeyDown} tabIndex="0">
          {this.props.keycode} {this.props.keyName}
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
    change_keycode: (keycode) => dispatch(change_keycode(keycode)),
    change_key: (key) => dispatch(change_key(key)),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;