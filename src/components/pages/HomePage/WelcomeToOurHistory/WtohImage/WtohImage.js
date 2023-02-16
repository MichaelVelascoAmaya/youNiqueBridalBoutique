import React from 'react';
import PropTypes from 'prop-types';
import styles from './WtohImage.module.css';
import { Box } from '@mui/material';
import Image from 'mui-image';

const WtohImage = ({ sx }) => (
  <Box className={styles.WtohImage} sx={{ ...sx }} >
      <Image 
        src='/images/paintBox.png'
      />
  </Box>
);

WtohImage.propTypes = {
  sx: PropTypes.object,
};

WtohImage.defaultProps = {
  sx: {},
};

export default WtohImage;
