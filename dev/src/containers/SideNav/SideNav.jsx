import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideNav.scss';

import Input from 'components/Input';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 'title', // 'title', 'desc'
      shownItems: props.items
    }
    
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  
  handleSearchInputChange(text) {
    const titleFilter = (item) => {
      return item.name.toLowerCase().includes(text);
    }
    const descFilter = (item) => {
      return item.description.includes(text);
    }
    
    const filter = this.state.filterType === 'title' ? titleFilter : descFilter;
    
    const filteredItems = this.props.items.filter(filter);
    this.setState({
      shownItems: filteredItems
    });
  }
  
  handleItemClick(itemName) {
   if (this.props.itemClickHandler) {
     this.props.itemClickHandler(itemName);
   } 
  }
  
  toggleFilterType() {
    const filterTypeIsTitle = this.state.filterType === 'title';
    this.setState({
      filterType: filterTypeIsTitle ? 'desc' : 'title'
    })
  }
  
  render() {
    
    const namItemElements = this.state.shownItems.map((item) => {
      return (
        <li className="nav-item p-0" onClick={ () => { this.handleItemClick(item.name) }}>
          <a className={`${styles.SideNav__item}`} href="#">{item.name}</a>
        </li>
      );
    });
    
    return (
      <div className={styles.SideNav}>
        <div className={styles.SideNav__search}>
          {this.state.filterType}
          <Input
            className={styles[`SideNav__search--${this.state.filterType}`]}
            keyDownHandler={ (e) => {
              if (e.keyCode === 9) {
                this.toggleFilterType();
                e.preventDefault();
              }
            }}
            textChangeHandler={ ({ value, event }) => {
              this.handleSearchInputChange(value);
            }}
          />
        </div>
        <div className={styles.SideNav__nav}>
          <ul className={`nav flex-column`}>
            {namItemElements}
          </ul>
        </div>
      </div>
    );
  }
}

SideNav.propTypes = {
  items: PropTypes.array,
  itemClickHandler: PropTypes.func
};
SideNav.defaultProps = {
};

export default SideNav;