import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles.css';
import { change_keycode } from '../actions'

class App extends React.Component {
  
   constructor(props) {
     super(props);
     
   }
  
  render() {
    return (
      <div className={styles.blue}>{this.props.keycode}</div>
    )
  } 
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    keycode: state.keycodeViewer.keycode
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    change_keycode: (keycode) => dispatch(change_keycode(keycode)),
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;