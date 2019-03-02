import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Document from 'pages/Document';
import KeyCode from 'pages/KeyCode';

// var ghProjectName = window.location.pathname.split('/')[1];
const ghProjectName = '';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Document} />
            <Route exact path="/keycode" component={KeyCode} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default MainApp;
