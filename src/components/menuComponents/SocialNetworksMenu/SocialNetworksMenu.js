import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialNetworksMenu.module.css';
import Grid from '@mui/material/Unstable_Grid2';
import { withTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Tooltip } from '@mui/material';

const SocialNetworksMenu = ({ direction, t }) => (
  <Box className={styles.SocialNetworksMenu} >
    <Grid container
      justifyContent="center"
      alignItems="center"
      direction={direction}
    >
      <Grid item component={'a'} href={t('withoutTranslations.socialNetworks.facebook.url')} target='_blank'>
        <Tooltip title={t('withoutTranslations.socialNetworks.facebook.label')}>
          <FacebookIcon color="action" />
        </Tooltip>
      </Grid>
      <Grid item component={'a'} href={t('withoutTranslations.socialNetworks.instagram.url')} target='_blank'>
        <Tooltip title={t('withoutTranslations.socialNetworks.instagram.label')}>
          <InstagramIcon color="action" />
        </Tooltip>
      </Grid>
    </Grid>
  </Box>
)

SocialNetworksMenu.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
};

SocialNetworksMenu.defaultProps = {
  direction: 'row',
};

export default withTranslation()(SocialNetworksMenu);
