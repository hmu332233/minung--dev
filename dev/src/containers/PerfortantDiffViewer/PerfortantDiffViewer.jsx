import React from 'react';
import PropTypes from 'prop-types';
import styles from './PerfortantDiffViewer.scss';

import _ from 'lodash';

class PerfortantDiffViewer extends React.Component {
  constructor(props) {
    super(props);
    
    this.mostPerformant = this.mostPerformant.bind(this);
  }
  
  mostPerformant(fns, iterations = 10000) {
    const times = fns.map(fn => {
      const before = performance.now();
      for (let i = 0; i < iterations; i++) eval(fn);
      return performance.now() - before;
    });
    return times.indexOf(Math.min(...times));
  };
  
  render() {
    const mostFunc = this.mostPerformant(['for(var i = 1 ; i < 10 ; i++) console.log("a")','for(var i = 1 ; i < 1 ; i++) console.log("b")'], 10)
    
    return (
      <div>
        PerfortantDiffViewer
        {mostFunc}
      </div>
    );
  }
}


PerfortantDiffViewer.propTypes = {
};
PerfortantDiffViewer.defaultProps = {
};

export default PerfortantDiffViewer;