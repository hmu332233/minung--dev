import React from 'react';
import PropTypes from 'prop-types';
import styles from './Docs.scss';
import { Menus, DocsViewer } from 'components';
import { SideNav } from 'containers';

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownDocItem: props.docsItems[0]
    }
    
    this.changeShownDocItem = this.changeShownDocItem.bind(this);
  }
  
  changeShownDocItem(itemName) {
    const filteredDocItem = this.props.docsItems.filter((docItem) => {
      return docItem.name === itemName;
    })[0];
    this.setState({
      shownDocItem: filteredDocItem
    });
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
              this.changeShownDocItem(itemName);
            }}
          />
          <div className="container">
            <DocsViewer {...this.state.shownDocItem} />
          </div>
        </div>
      </div>
    );
  }
}


const pagination = {
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

const truncateLongText = {
  name: 'truncateLongText',
  description: '텍스트와 최대 길이, 대체 텍스트를 받아 최대 길이를 넘는 문자에 대해서 대체 텍스트로 변환한다',
  def: `function truncateLongText(_text, _maxLength, _lastText) {
  var text = _text;
	var maxLength = _maxLength || 20;
	var lastText = _lastText || "...";

	if (text.length > maxLength) {
		text = text.substr(0, maxLength) + lastText;
	}
	return text;
};`,
  runFunctions: [
    'truncateLongText("가나다라마바사", 3); // 가나다...',
    'truncateLongText("가나다라마바사", 5, "###"); // 가나다라마###'
  ]
};

const docsItems = [
  pagination,
  truncateLongText
];

Docs.propTypes = {
  docsItems: PropTypes.array
};
Docs.defaultProps = {
  docsItems
};

export default Docs;