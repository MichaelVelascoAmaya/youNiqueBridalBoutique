import React from 'react';
// import PropTypes from 'prop-types';
import styles from './AuImages.module.css';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const AuImages = () => (
  <Box className={styles.AuImages} data-testid="AuImages">
    <Swiper
      className={styles.swiper}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
    >
      <SwiperSlide className={styles['swiper-slide']}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 4</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 5</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 6</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 7</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 8</SwiperSlide>
      <SwiperSlide className={styles['swiper-slide']}>Slide 9</SwiperSlide>
    </Swiper>
  </Box>
);

AuImages.propTypes = {};

AuImages.defaultProps = {};

export default AuImages;
