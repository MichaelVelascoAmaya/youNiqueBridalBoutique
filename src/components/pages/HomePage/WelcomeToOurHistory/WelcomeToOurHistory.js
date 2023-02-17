import React from 'react';
// import PropTypes from 'prop-types';
import styles from './WelcomeToOurHistory.module.css';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import WtohText from './WtohText/WtohText';
import WtohImage from './WtohImage/WtohImage';

const WelcomeToOurHistory = () => (
  <Box className={styles.WelcomeToOurHistory} >
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md >
        <WtohText sx={{ px: 3 }} />
      </Grid>
      <Grid item md >
        <WtohImage />
      </Grid>
    </Grid>
  </Box>
);

WelcomeToOurHistory.propTypes = {};

WelcomeToOurHistory.defaultProps = {};

export default WelcomeToOurHistory;
