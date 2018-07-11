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
    
    return {
      mostFunctionIndex: times.indexOf(Math.min(...times)),
      times
    }
  };
  
  render() {
    const { functions, iterationCount } = this.props;
    const mostFunc = this.mostPerformant(functions, iterationCount);
    
    return (
      <div>
        PerfortantDiffViewer
        <code>
          {functions[mostFunc.mostFunctionIndex]}
        </code>
        {mostFunc.times.map((time, index) => {
          return (
            <div>{time}</div>
          );
        })}
      </div>
    );
  }
}


PerfortantDiffViewer.propTypes = {
};
PerfortantDiffViewer.defaultProps = {
  functions: [
    'for(var i = 1 ; i < 10 ; i++) console.log("a")',
    'for(var i = 1 ; i < 1 ; i++) console.log("b")'
  ],
  iterationCount: 10
};

export default PerfortantDiffViewer;