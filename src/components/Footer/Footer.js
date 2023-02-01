import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Paper } from '@mui/material';

const Footer = () => {
  return (
    <Paper sx={{
      bottom: 0,
      margin: 0,
      padding: 2
    }} component="footer" square className={styles.Footer} >
      footer
    </Paper>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
