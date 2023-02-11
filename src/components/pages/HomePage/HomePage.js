import React from 'react';
// import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomePage = () => (
  <Box height='inherit' className={ styles.HomePage } >
    <Swiper className={ styles.swiper } direction='vertical' slidesPerView={1} >
      <SwiperSlide>Image</SwiperSlide>
      <SwiperSlide>welcome to our history</SwiperSlide>
      <SwiperSlide>about us</SwiperSlide>
      <SwiperSlide>brands images</SwiperSlide>
      <SwiperSlide>find us</SwiperSlide>
    </Swiper>
  </Box>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
