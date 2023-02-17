import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuText.module.css';
import { Box, Typography } from '@mui/material';
import { withTranslation } from 'react-i18next';

const AuText = ({ t, sx }) => (
  <Box className={styles.AuText} sx={{ ...sx }} data-testid="AuText">
    <Typography variant='h4' textAlign='center' gutterBottom >{ t('others.aboutUs.title') }</Typography>
    <Typography gutterBottom >{ t('others.aboutUs.paragraphOne') }</Typography>
    <Typography gutterBottom >{ t('others.aboutUs.paragraphTwo') }</Typography>
    <Typography gutterBottom >{ t('others.aboutUs.paragraphThree') }</Typography>
  </Box>
);

AuText.propTypes = {
  sx: PropTypes.object,
};

AuText.defaultProps = {
  sx: {},
};

export default withTranslation()(AuText);
