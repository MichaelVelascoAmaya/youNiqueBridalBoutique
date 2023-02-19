import React from 'react';
import PropTypes from 'prop-types';
import styles from './Copyright.module.css';
import { Card, CardHeader } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { withTranslation } from 'react-i18next';

const Copyright = ({ t, sx }) => (
  <Card className={styles.Copyright} sx={{ ...sx }} >
    <CardHeader
      avatar={<CopyrightIcon />}
      title={`${(new Date()).getFullYear()}. ${t('withoutTranslations.appName')}.`}
    />
  </Card>
);

Copyright.propTypes = {
  sx: PropTypes.object,
};

Copyright.defaultProps = {
  sx: {},
};

export default  withTranslation()(Copyright);
