import React from 'react';
import styles from '../styles/styles.scss';
import { BasicLayout } from 'containers';


var ghProjectName = window.location.pathname.split('/')[1];

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasicLayout activeMenu="Home">
        <div className={styles.blue}>Hello world!</div>
      </BasicLayout>
    );
  }
}

export default Home;