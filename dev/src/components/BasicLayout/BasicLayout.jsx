import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicLayout.scss';

import BasicHeader from 'containers/BasicHeader';
import Footer from 'components/Footer';

const BasicLayout = React.memo(props => {
  return (
    <div className="page">
      <div className="page-main">
        <BasicHeader />
        <div className="my-3 my-md-5">
          <div className="container">{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

BasicLayout.propTypes = {};
BasicLayout.defaultProps = {};

export default BasicLayout;
