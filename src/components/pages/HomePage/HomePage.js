import React from 'react';
// import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import { Box } from '@mui/material';
import WelcomeToOurHistory from './WelcomeToOurHistory/WelcomeToOurHistory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import CoverPage from './CoverPage/CoverPage';
import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { rootPath } from '../../../routes/routesDom';

const HomePage = ({ t }) => {
  const navigate = useNavigate();
  return (
    <Box height='inherit' className={styles.HomePage} >
      <Swiper className={styles.swiper}
        modules={[Mousewheel, Pagination]}
        direction='vertical'
        slidesPerView={1}
        pagination={{ clickable: true }}
        mousewheel={true}
      >
        <SwiperSlide>
          <CoverPage
            buttonOnClick={(e) => navigate(`/${rootPath}/collections`)}
            imageBackground='/images/backgroundCoverPages/label.jpg'
            title={t('withoutTranslations.appName')}
            buttonTitle={t('menuList.collections')}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WelcomeToOurHistory />
        </SwiperSlide>
        <SwiperSlide>about us</SwiperSlide>
        <SwiperSlide>brands images</SwiperSlide>
        <SwiperSlide>find us</SwiperSlide>
      </Swiper>
    </Box>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withTranslation()(HomePage);
