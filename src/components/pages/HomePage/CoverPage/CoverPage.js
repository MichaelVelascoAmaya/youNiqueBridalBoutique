import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoverPage.module.css';
import { Box, Button, Typography } from '@mui/material';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import arrowUp from 'react-useanimations/lib/arrowUp';
import { Trans } from 'react-i18next';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const CoverPage = ({ buttonOnClick, buttonIcon, buttonRightComponent, imageBackground, title, description, buttonTitle, upComponent, downComponenet, endIconComponent, startIconComponent, arrowOnclick, arroyDirection, containerSx, sectionUpSx, sectionDownSx }) => (
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
      <Typography className={styles['text-primary']} variant="h1" >{title}</Typography>
      <Typography className={styles['text-secondary']} variant='overline' >{description}</Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt:2 }}
      >
        <Grid item >
          {
            buttonTitle && buttonIcon && buttonIcon.position === 'start' ? (
              <Button variant="outlined" onClick={buttonOnClick} color='white' size="large" startIcon={buttonIcon.icon}>{buttonTitle}</Button>
            ) 
            : 
            buttonTitle && buttonIcon && buttonIcon.position === 'end' ? (
              <Button variant="outlined" onClick={buttonOnClick} color='white' size="large" endIcon={buttonIcon.icon}>{buttonTitle}</Button>
            ) 
            :
            buttonTitle && (
              <Button variant="outlined" onClick={buttonOnClick} color='white' size="large">{buttonTitle}</Button>
            )
          }
        </Grid>
        <Grid item >
          { buttonRightComponent && (buttonRightComponent) }
        </Grid>
      </Grid>
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
  buttonIcon: PropTypes.shape({
    position: PropTypes.oneOf(['start', 'end']),
    icon: PropTypes.object,
  }),
  buttonRightComponent: PropTypes.element,
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
  buttonOnClick: () => {},
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
