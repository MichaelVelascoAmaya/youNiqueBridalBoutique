import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoverPage.module.css';
import { Box, Button, Typography } from '@mui/material';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import arrowUp from 'react-useanimations/lib/arrowUp';
import { Trans } from 'react-i18next';

const CoverPage = ({ buttonOnClick, imageBackground, title, description, buttonTitle, upComponent, downComponenet, endIconComponent, startIconComponent, arrowOnclick, arroyDirection, containerSx, sectionUpSx, sectionDownSx }) => (
  <Box className={styles.CoverPage} sx={{ ...containerSx, backgroundImage: 'url("' + imageBackground + '");' }} data-testid="CoverPage" >
    <Box className={styles.section}>
    {
      (arroyDirection && (arroyDirection === 'top' || arroyDirection === 'top-bottom')) && 
      (<Box onClick={arrowOnclick} sx={{ ...startIconComponent.sxComponent }} >{startIconComponent.component}</Box>)
    }
    </Box>

    {
      upComponent && (
        <Box className={styles.section} sx={{ ...upComponent.sxComponent }} >{upComponent.component}</Box>
      )
    }

    <Box className={styles.section} sx={{ px: 3 }}>
      <Typography className={styles['text-primary']} variant="h1" fontFamily={'system-ui'} >{title}</Typography>
      <Typography className={styles['text-secondary']} variant='overline' >{description}</Typography>
      {
        buttonOnClick && (
          <Button variant="outlined" onClick={buttonOnClick} color='white' size="large" sx={{ mt: 2 }}>{buttonTitle}</Button>
        )
      }
    </Box>

    {
      downComponenet && (
        <Box className={styles.section} sx={{ ...downComponenet.sxComponent }} >{downComponenet.component}</Box>
      )
    }

    <Box className={styles.section}>
    {
      (arroyDirection && (arroyDirection === 'bottom' || arroyDirection === 'top-bottom')) && 
      (<Box onClick={arrowOnclick} sx={{ ...endIconComponent.sxComponent }} >{endIconComponent.component}</Box>)
    }
    </Box>

  </Box>
);

CoverPage.propTypes = {
  buttonOnClick: PropTypes.func,
  imageBackground: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  upComponent: PropTypes.shape({
    component: PropTypes.element,
    sxComponent: PropTypes.object,
  }),
  downComponenet: PropTypes.shape({
    component: PropTypes.element,
    sxComponent: PropTypes.object,
  }),
  endIconComponent: PropTypes.shape({
    component: PropTypes.element,
    sxComponent: PropTypes.object,
  }),
  startIconComponent: PropTypes.shape({
    component: PropTypes.element,
    sxComponent: PropTypes.object,
  }),
  arrowOnclick: PropTypes.func,
  arroyDirection: PropTypes.oneOf(['top', 'bottom', 'left', 'rigth', 'top-bottom', 'left-rigth']),
  containerSx: PropTypes.object,
  sectionUpSx: PropTypes.object,
  sectionDownSx: PropTypes.object,
};

CoverPage.defaultProps = {
  title: <Trans>withoutTranslations.appName</Trans>,
  imageBackground: '',
  description: '',
  buttonTitle: '-',
  endIconComponent: {
    component: <UseAnimations animation={arrowDown} size={48} />
  },
  startIconComponent: {
    component: <UseAnimations animation={arrowUp} size={48} />
  },
  arrowOnclick: () => { },
  containerSx: {},
  sectionUpSx: {},
  sectionDownSx: {},
};

export default CoverPage;
