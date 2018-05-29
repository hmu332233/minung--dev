import React from 'react';
import styles from './Docs.scss';
import { Menus, DocsViewer } from 'components';
import { SideNav } from 'containers';

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

const docsItems = [data];

class Docs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO:: markdown 모양으로 작성 가능하도록
    // TODO:: 코드 보이고 코드 결과 실행해서 볼 수 있고
    return (
      <div>
        <Menus />
        <div className={styles.Docs}>
          <SideNav
            items={docsItems}
            itemClickHandler={itemName => {
              console.log(itemName);
            }}
          />
          <div className="container">
            <DocsViewer {...docsItems[0]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;