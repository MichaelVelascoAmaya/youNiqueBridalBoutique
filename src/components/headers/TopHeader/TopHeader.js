import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopHeader.module.css';
import { Paper } from '@mui/material';
import Image from 'mui-image';
import MenuList from '../../menuComponents/MenuList/MenuList';

const TopHeader = ({ otherButtons, reference }) => (
  <Paper component='header' className={styles.TopHeader} square ref={reference} >
    <Image src='/images/logo.jpg' width={100} />
    <MenuList orientation='horizontal' otherOptions={otherButtons} />
  </Paper>
);

TopHeader.propTypes = {
  otherButtons: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      element: PropTypes.node,
      label: PropTypes.string,
      icon: PropTypes.node,
      navigateButton: PropTypes.bool,
      useDefaultActionOnClick: PropTypes.bool,
      popOver: PropTypes.shape({
        method: PropTypes.oneOf(['click', 'hover']),
        component: PropTypes.node
      }),
    })
  ),
  reference: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLElement),
  }),
};

TopHeader.defaultProps = {
  otherButtons: [],
  reference: { current: null },
};

export default TopHeader;
