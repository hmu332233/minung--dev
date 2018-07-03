import React from 'react';
import PropTypes from 'prop-types';
import styles from './PerfortantDiffViewer.scss';

class PerfortantDiffViewer extends React.Component {
  constructor(props) {
    super(props);
    
    this.mostPerformant = this.mostPerformant.bind(this);
  }
  
  mostPerformant(fns, iterations = 10000) => {
    const times = fns.map(fn => {
      const before = performance.now();
      for (let i = 0; i < iterations; i++) fn();
      return performance.now() - before;
    });
    return times.indexOf(Math.min(...times));
  };
  
  render() {
    return (
    );
  }
}


PerfortantDiffViewer.propTypes = {
};
PerfortantDiffViewer.defaultProps = {
};

export default PerfortantDiffViewer;