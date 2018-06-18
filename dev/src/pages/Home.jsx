import React from 'react';
import styles from '../styles/styles.scss';
import { Menus } from '../components';


var ghProjectName = window.location.pathname.split('/')[1];

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menus />
        <div className={styles.blue}>Hello world!</div>
      </div>
    );
  }
}

export default Home;