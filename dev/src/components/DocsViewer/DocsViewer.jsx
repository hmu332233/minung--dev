import React from 'react';
import PropTypes from 'prop-types';
import styles from './DocsViewer.scss';

import { Card } from 'reactstrap';

import { Highlighter, Runner } from 'components';
import { RunExample } from 'containers';

class DocsViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const runExampleElements = this.props.runFunctions.map((runFunction, index) => {
      return (
        <RunExample key={index} def={this.props.def} runFunction={runFunction} />
      );
    });

    return (
      <Card body>
        <h3>{this.props.name}</h3>
        <p className={styles.DocsViewer__description}>{this.props.description}</p>
        <Highlighter code={this.props.def} />
        {runExampleElements}
      </Card>
    );
  }
}

DocsViewer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  def: PropTypes.string,
  runFunctions: PropTypes.array
};
DocsViewer.defaultProps = {
};

export default DocsViewer;