import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import { Box, Dialog, DialogContent } from '@mui/material';
import WelcomeToOurHistory from './WelcomeToOurHistory/WelcomeToOurHistory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import CoverPage from './CoverPage/CoverPage';
import { withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { rootPath } from '../../../routes/routesDom';
import CloseIcon from '@mui/icons-material/Close';
import AboutUs from './AboutUs/AboutUs';
import FindUs from './FindUs/FindUs';
import ObImages from './OurBrands/ObImages/ObImages';
import Copyright from '../../Footer/Copyright/Copyright';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { FacebookIcon, InstagramIcon } from '../../../assets/icons/icons';

const HomePage = ({ t }) => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [componentToRender, setComponentToRender] = useState(<></>);
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
            arroyDirection='bottom'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoverPage
            buttonOnClick={(e) => { setComponentToRender(<WelcomeToOurHistory />); setDialogOpen(true); }}
            imageBackground='/images/backgroundCoverPages/paintings.jpg'
            title={t('homePageCoverTexts.welcomeToOurLoveStory.title')}
            description={t('homePageCoverTexts.welcomeToOurLoveStory.description')}
            buttonTitle={t('homePageCoverTexts.welcomeToOurLoveStory.button')}
            arroyDirection='top-bottom'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoverPage
            buttonOnClick={(e) => { setComponentToRender(<AboutUs />); setDialogOpen(true); }}
            imageBackground='/images/backgroundCoverPages/dresses.jpg'
            title={t('homePageCoverTexts.aboutUs.title')}
            description={t('homePageCoverTexts.aboutUs.description')}
            buttonTitle={t('homePageCoverTexts.aboutUs.button')}
            arroyDirection='top-bottom'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoverPage
            imageBackground='/images/backgroundCoverPages/room.jpg'
            title={t('homePageCoverTexts.ourBrands.title')}
            description={t('homePageCoverTexts.ourBrands.description')}
            buttonTitle={t('homePageCoverTexts.ourBrands.button')}
            arroyDirection='top-bottom'
            downComponenet={{
              component: <ObImages />
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoverPage
            imageBackground='/images/backgroundCoverPages/mirror-vase.jpg'
            title={t('homePageCoverTexts.findUs.title')}
            description={t('homePageCoverTexts.findUs.description')}
            buttonTitle={t('others.ourNetworks')}
            buttonIcon={{
              position: 'end',
              icon: <ThumbUpOffAltIcon />
            }}
            arroyDirection='top-bottom'
            buttonOnClick={(e) => {
              e.target.children[0].style.color = e.target.children[0].style.color === 'rgb(66, 103, 178)' ? '#fff' : '#4267B2';
            }}
            buttonRightComponent={
            <Box>
              <Box component='a' href={t('withoutTranslations.socialNetworks.facebook.url')} target='_blank'><FacebookIcon sx={{ fontSize: 50 }} /></Box>
              <Box component='a' href={t('withoutTranslations.socialNetworks.instagram.url')} target='_blank'><InstagramIcon sx={{ fontSize: 45 }} /></Box>
            </Box>
            }
            endIconComponent={{
              component: <Copyright />,
              sxComponent: { width: '100%' }
            }}
            downComponenet={{
              component: <FindUs />,
              sxComponent: { width: '100%' }
            }}
          />
        </SwiperSlide>
      </Swiper>
      <Dialog
        fullScreen
        open={dialogOpen}
      >
        <DialogContent dividers className={styles['dialog-content']} >
          <Box className={styles['dialog-exit-content']} >
            <CloseIcon fontSize="large" onClick={() => setDialogOpen(false) }/>
          </Box>
          {componentToRender}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withTranslation()(HomePage);
