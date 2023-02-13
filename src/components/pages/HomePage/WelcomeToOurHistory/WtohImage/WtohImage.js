import React from 'react';
// import PropTypes from 'prop-types';
import styles from './WtohImage.module.css';
import { Box } from '@mui/material';
import Image from 'mui-image';

const WtohImage = () => (
  <Box className={styles.WtohImage} >
      <Image 
        src='/images/paintBox.png'
      />
  </Box>
);

WtohImage.propTypes = {};

WtohImage.defaultProps = {};

export default WtohImage;
