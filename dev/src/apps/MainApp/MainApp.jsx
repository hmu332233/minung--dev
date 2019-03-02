import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Document from 'pages/Document';

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
            {/*
            <Route path={`/${ghProjectName}/most_performant`} component={MostPerformant} />
            <Route path={`/${ghProjectName}/docs`} component={Docs} />
            <Route path={`/${ghProjectName}/keycode`} component={KeyCode} />
            */}
            <Route path="/" component={Document} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default MainApp;
