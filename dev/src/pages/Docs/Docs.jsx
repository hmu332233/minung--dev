import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Docs.scss';
import { Menus, DocsViewer } from 'components';
import { BasicLayout, SideNav } from 'containers';
import docsData from 'data/docsData';

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
      <BasicLayout>
        <div className={styles.Docs}>
          <SideNav
            items={this.props.docsItems}
            itemClickHandler={itemName => {
              this.changeShownDocItem(itemName);
            }}
          />
          <div className="container">
            <DocsViewer {...this.state.shownDocItem} />
          </div>
        </div>
      </BasicLayout>
    );
  }
}

Docs.propTypes = {
  docsItems: PropTypes.array
};
Docs.defaultProps = {
  docsItems: docsData
};

export default Docs;