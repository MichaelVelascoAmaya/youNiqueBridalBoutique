import React from 'react';
// import PropTypes from 'prop-types';
import styles from './AboutUs.module.css';
import { Box } from '@mui/material';
import AuText from './AuText/AuText';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import AuOurValues from './AuOurValues/AuOurValues';
import AuImages from './AuImages/AuImages';

const AboutUs = () => (
  <Box className={styles.AboutUs} data-testid="AboutUs">
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item lg >
        <AuText sx={{ px: 3 }} />
      </Grid>
      <Grid item lg >
        <AuImages />
      </Grid>
      <Grid item lg >
        <AuOurValues />
      </Grid>
    </Grid>
  </Box>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
