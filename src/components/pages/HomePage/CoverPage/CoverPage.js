import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoverPage.module.css';
import { Box, Button, Typography } from '@mui/material';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import { Trans } from 'react-i18next';

const CoverPage = ({ buttonOnClick, imageBackground, title, description, buttonTitle, arrowOnclick }) => (
  <Box className={styles.CoverPage} sx={{ backgroundImage: 'url("' + imageBackground + '");' }} data-testid="CoverPage" >
    <Box className={styles.section}>
      <Typography className={styles['text-primary']} variant="h1" fontFamily={'system-ui'} >{title}</Typography>
      <Typography className={styles['text-secondary']} variant='overline' >{description}</Typography>
      <Button variant="outlined" onClick={buttonOnClick} color='white' size="large" sx={{ mt: 2 }}>{buttonTitle}</Button>
    </Box>
    <Box className={styles.section}>
      <UseAnimations animation={arrowDown} size={45} onClick={arrowOnclick} />
    </Box>
  </Box>
);

CoverPage.propTypes = {
  buttonOnClick: PropTypes.func,
  imageBackground: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  arrowOnclick: PropTypes.func,
};

CoverPage.defaultProps = {
  buttonOnClick: () => {},
  title: <Trans>withoutTranslations.appName</Trans>,
  imageBackground: '',
  description: '',
  buttonTitle: '-',
  arrowOnclick: () => { },
};

export default CoverPage;
