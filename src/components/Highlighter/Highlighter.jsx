import React from 'react';
import PropTypes from 'prop-types';
import styles from './Highlighter.scss';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

class Highlighter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SyntaxHighlighter className={this.props.className} language="javascript" style={atomDark} >
        {this.props.code}
      </SyntaxHighlighter>
    );
  }
}

Highlighter.propTypes = {
  code: PropTypes.string,
  className: PropTypes.string
};
Highlighter.defaultProps = {};

export default Highlighter;