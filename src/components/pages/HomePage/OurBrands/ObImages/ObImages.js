import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ObImages.module.css';
import { Box } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

const brandImages = [
  {
    title: 'ivoireByKittyChen',
    description: '',
    path: '/images/brands/ivoireByKittyChen.png',
  },
  {
    title: 'jessicaMcClintock',
    description: '',
    path: '/images/brands/jessicaMcClintock.png',
  },
  {
    title: 'kittyChenCouture',
    description: '',
    path: '/images/brands/kittyChenCouture.png',
  },
  {
    title: 'white',
    description: '',
    path: '/images/brands/white.png',
  },
  {
    title: 'laSposa',
    description: '',
    path: '/images/brands/laSposa.webp',
  },
];

const ObImages = () => (
  <Box className={styles.ObImages} data-testid="ObImages">
    <Swiper 
      className={styles.swiper}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      pagination={true}
      navigation={true}
      grabCursor={true}
      centeredSlides={true}
      effect={'coverflow'}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
    >
      {
        brandImages.map((v, k) => (
          <SwiperSlide className={styles['swiper-slide']} key={`brand-${v.title}`} >
            <img className={styles.img} alt={`${v.description}`} src={`${v.path}`} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  </Box>
);

ObImages.propTypes = {};

ObImages.defaultProps = {};

export default ObImages;
