import React from 'react';
import styles from '../styles/styles.scss';
import { Menus } from '../components';

class Custom  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menus />
        <div>path: {this.props.match.params.path}</div>
      </div>
    );
  }
}

export default Custom;