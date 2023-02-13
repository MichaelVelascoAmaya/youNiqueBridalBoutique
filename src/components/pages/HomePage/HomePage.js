import React from 'react';
// import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import { Box } from '@mui/material';
import WelcomeToOurHistory from './WelcomeToOurHistory/WelcomeToOurHistory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => (
  <Box height='inherit' className={ styles.HomePage } >
    <Swiper className={ styles.swiper } 
      modules={[Mousewheel, Pagination]}
      direction='vertical' 
      slidesPerView={1} 
      pagination={{ clickable: true }}
      mousewheel={true}
    >
      <SwiperSlide>Image</SwiperSlide>
      <SwiperSlide>
        <WelcomeToOurHistory />
      </SwiperSlide>
      <SwiperSlide>about us</SwiperSlide>
      <SwiperSlide>brands images</SwiperSlide>
      <SwiperSlide>find us</SwiperSlide>
    </Swiper>
  </Box>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
