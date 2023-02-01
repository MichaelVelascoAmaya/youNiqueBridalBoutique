import React from 'react';
//import PropTypes from 'prop-types';
import styles from './TopHeader.module.css';
import { Paper } from '@mui/material';

const TopHeader = () => (
  <Paper sx={{
    top: 0,
    margin: 0,
    padding: 2
  }} component="header" square className={styles.TopHeader} >
    header
  </Paper>
);

TopHeader.propTypes = {};

TopHeader.defaultProps = {};

export default TopHeader;
