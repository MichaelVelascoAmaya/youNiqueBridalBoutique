import React from 'react';
// import PropTypes from 'prop-types';
import styles from './WelcomeToOurHistory.module.css';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Swiper, SwiperSlide } from 'swiper/react';
import WtohText from './WtohText/WtohText';
import WtohImage from './WtohImage/WtohImage';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const WelcomeToOurHistory = () => (
  <Box className={styles.WelcomeToOurHistory} >
    { 
      useMediaQuery(useTheme().breakpoints.up('md')) ? 
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={styles['grid-container']}
        >
          <Grid className={styles['grid-column-row']} item xs={6} >
            <WtohText />
          </Grid>
          <Grid className={styles['grid-column-row']} item xs={6} >
            <WtohImage />
          </Grid>
        </Grid> 
      : 
      <Swiper className={styles['swiper-container']}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <WtohText />
        </SwiperSlide>
        <SwiperSlide>
          <WtohImage />
        </SwiperSlide>
      </Swiper>
    }
  </Box>
);

WelcomeToOurHistory.propTypes = {};

WelcomeToOurHistory.defaultProps = {};

export default WelcomeToOurHistory;
