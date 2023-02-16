import React from 'react';
import PropTypes from 'prop-types';
import styles from './WtohText.module.css';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { withTranslation } from 'react-i18next';

const WtohText = ({ t, sx }) => (
  <Box className={styles.WtohText} sx={{ ...sx  }} >
    <Typography variant='h3' textAlign='center' gutterBottom >{ t('others.welcomeToOurLoveStory.title') }</Typography>
    <Typography gutterBottom >{ t('others.welcomeToOurLoveStory.paragraphOne') }</Typography>
    <Typography gutterBottom >{ t('others.welcomeToOurLoveStory.paragraphTwo') }</Typography>
    <Typography gutterBottom >{ t('others.welcomeToOurLoveStory.paragraphThree') }</Typography>
    <Typography variant='h5' textAlign='center' gutterBottom >{ t('others.welcomeToOurLoveStory.end') }</Typography>
  </Box>
);

WtohText.propTypes = {
  sx: PropTypes.object,
};

WtohText.defaultProps = {
  sx: {},
};

export default withTranslation()(WtohText);
