import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuOurValues.module.css';
import { Box, Typography } from '@mui/material';
import { withTranslation } from 'react-i18next';

const AuOurValues = ({ t, sx }) => (
  <Box className={styles.AuOurValues} sx={{ ...sx }} data-testid="AuOurValues">
    <Typography >{t('others.aboutUs.ourValues.firstValue.title')}</Typography>
    <Typography gutterBottom >{t('others.aboutUs.ourValues.firstValue.description')}</Typography>

    <Typography >{t('others.aboutUs.ourValues.secondValue.title')}</Typography>
    <Typography gutterBottom >{t('others.aboutUs.ourValues.secondValue.description')}</Typography>

    <Typography >{t('others.aboutUs.ourValues.thirdValue.title')}</Typography>
    <Typography gutterBottom >{t('others.aboutUs.ourValues.thirdValue.description')}</Typography>
  </Box>
);

AuOurValues.propTypes = {
  sx: PropTypes.object,
};

AuOurValues.defaultProps = {
  sx: {},
};

export default withTranslation()(AuOurValues);
