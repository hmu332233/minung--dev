import React from 'react';
import styles from '../styles/styles.scss';
import { Menus } from '../components';

class Docs  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menus />
        <div className="container">
          docs
        </div>
      </div>
    );
  }
}

export default Docs;