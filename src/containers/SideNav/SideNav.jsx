import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideNav.scss';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  
  handleItemClick(itemName) {
   if (this.props.itemClickHandler) {
     this.props.itemClickHandler(itemName);
   } 
  }
  
  render() {
    
    const namItemElements = this.props.items.map((item) => {
      return (
        <li className="nav-item" onClick={ () => { this.handleItemClick(item.name) }}>
          <a className="nav-link" href="#">{item.name}</a>
        </li>
      );
    });
    
    return (
      <div className={styles.SideNav}>
        <div className={styles.SideNav__search}>
          search section
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