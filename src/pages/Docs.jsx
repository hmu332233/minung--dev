import React from 'react';
import styles from '../styles/styles.scss';
import { Menus, Highlighter, Runner } from 'components';
import { RunExample } from 'containers';

const data = {
  name: 'pagination',
  description: '배열과 페이지당 사이즈, 페이지 번호를 받아 페이지에 해당하는 배열만큼을 리턴한다',
  def: `function paginate (array, page_size, page_number) {
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}`,
  runFunctions: [
    'paginate([1, 2, 3, 4, 5, 6], 2, 1); // [3, 4]', 
    'paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 0); // [1, 2, 3, 4]'
  ]
};

class Docs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO:: markdown 모양으로 작성 가능하도록
    // TODO:: 코드 보이고 코드 결과 실행해서 볼 수 있고

    const runExampleElements = data.runFunctions.map(runFunction => {
      return (
        <RunExample def={data.def} runFunction={runFunction} />
      );
    });

    return (
      <div>
        <Menus />
        <div className="container">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <Highlighter code={data.def} />
          {runExampleElements}
        </div>
      </div>
    );
  }
}

export default Docs;