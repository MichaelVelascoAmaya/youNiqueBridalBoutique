import React from 'react';
//import PropTypes from 'prop-types';
import styles from './TopHeader.module.css';
import { Paper } from '@mui/material';
import Image from 'mui-image';
import MenuList from '../../menuComponents/MenuList/MenuList';

const TopHeader = () => (
  <Paper component='header' className={styles.TopHeader} square >
    <Image src='images/logo.jpg' width={100} />
    <MenuList orientation='horizontal' />
  </Paper>
);

TopHeader.propTypes = {};

TopHeader.defaultProps = {};

export default TopHeader;
