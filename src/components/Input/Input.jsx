import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      value
    });
    
    if (this.props.textChangeHandler) {
      this.props.textChangeHandler(value);
    }
  }
  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}


Input.propTypes = {
  textChangeHandler: PropTypes.func
};
Input.defaultProps = {
};

export default Input;