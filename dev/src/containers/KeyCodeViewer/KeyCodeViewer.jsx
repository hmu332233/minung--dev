import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './KeyCodeViewer.scss';

function useKeyCode() {
  const [keyCode, setKeyCode] = useState('none');
  const [key, setKey] = useState(0);

  const handleKeyPress = e => {
    setKeyCode(e.keyCode);
    setKey(e.key);
  };

  return { key, keyCode, handleKeyPress };
};

const KeyCodeViewer = React.memo(props => {
  const { key, keyCode, handleKeyPress } = useKeyCode();
  return (
    <div className={styles.KeyCodeViewer} onKeyDown={handleKeyPress} tabIndex="0">
      <span>{key}</span>
      <span>{keyCode}</span>
    </div>
  );
});

KeyCodeViewer.propTypes = {
};
KeyCodeViewer.defaultProps = {
};

export default KeyCodeViewer;