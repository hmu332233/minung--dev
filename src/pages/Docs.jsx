import React from 'react';
import styles from '../styles/styles.scss';
import { Menus, Highlighter } from '../components';

const data = {
  def: `const indexOfAll = (arr, val) => {
  const indices = [];
  arr.forEach((el, i) => el === val && indices.push(i));
  return indices;
};`,
  run: ['indexOfAll([1, 2, 3], 4)', 'indexOfAll([1, 2, 3, 1, 2, 3], 1)']
};

class Docs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO:: markdown 모양으로 작성 가능하도록
    // TODO:: 코드 보이고 코드 결과 실행해서 볼 수 있고

    const runResult = data.run.map(run => {
      
      const code = `${run}\n\n${eval(data.def + run)}`
      
      return (
        <div>
        <Highlighter
          code={`${code}`} 
        /> 
        <br/>
        </div>
      );
    });

    return (
      <div>
        <Menus />
        <div className="container">
          <Highlighter code={data.def} />
          <br />
          {runResult}
        </div>
      </div>
    );
  }
}

export default Docs;