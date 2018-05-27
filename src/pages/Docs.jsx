import React from 'react';
import styles from '../styles/styles.scss';
import { Menus, Highlighter } from '../components';
import Embed from 'react-runkit';

const data = {
  name: 'pagination',
  description: '',
  def: `function paginate (array, page_size, page_number) {
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}`,
  run: [
    'paginate([1, 2, 3, 4, 5, 6], 2, 1); // [3, 4]', 
    'paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 0); // [1,2,3,4]'
  ]
};

class Docs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO:: markdown 모양으로 작성 가능하도록
    // TODO:: 코드 보이고 코드 결과 실행해서 볼 수 있고

    const runResult = data.run.map(run => {
      
      const code = `${data.def}\n\n${run}`;
      
      return (
        <div>
          <Highlighter
            code={`${code}`} 
          />
          <Embed source={code} />
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