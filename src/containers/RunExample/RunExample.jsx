import React from 'react';
import PropTypes from 'prop-types';
import styles from './RunExample.scss';
import { Highlighter, Runner } from 'components';

class RunExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false
    };

    this.run = this.run.bind(this);
  }

  run() {
    this.setState({
      isRunning: true
    });
  }

  render() {
    return (
      <div>
        <div className={styles.RunExample__wrapper}>
          <Highlighter
            className={styles.RunExample__highlighter}
            code={`${this.props.runFunction}`}
          />
          <div className={styles.RunExample__buttonWrapper}>
            <button type="button" class="btn btn-success btn-sm" onClick={this.run}>
              Run
            </button>
          </div>
        </div>
        {this.state.isRunning ? (
          <Runner code={`${this.props.def}\n\n${this.props.runFunction}`} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

RunExample.propTypes = {
  def: PropTypes.string,
  runFunction: PropTypes.string
};
RunExample.defaultProps = {};

export default RunExample;