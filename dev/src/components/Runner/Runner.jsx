import React from 'react';
import PropTypes from 'prop-types';
import styles from './Runner.scss';

import Embed from 'react-runkit';

class Runner extends React.Component {
  constructor(props) {
    super(props);
  }

  run() {
    this.refs.embed.evaluate();
  }

  render() {
    return <Embed source={this.props.code} ref="embed" onLoad={this.run.bind(this)} />;
  }
}

Runner.propTypes = {
  code: PropTypes.string
};
Runner.defaultProps = {
  code: ''
};

export default Runner;