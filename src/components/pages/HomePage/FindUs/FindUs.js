import React from 'react';
import PropTypes from 'prop-types';
import styles from './FindUs.module.css';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { withTranslation } from 'react-i18next';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const FindUs = ({ t }) => (
  <Box className={styles.FindUs} data-testid="FindUs">
    <Grid container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={12} sm={6} >
        <Box className={styles['grid-section']} >
          <List dense={false}>

            <ListItem>
              <ListItemIcon> <CalendarMonthOutlinedIcon className={styles.icon} /> </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ className: styles.text }}
                primary={`${t('weekDays.monday')} - ${t('weekDays.friday')}`}
                secondary={`${t('withoutTranslations.schedules.mondayToFriday')}`}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon> <DateRangeOutlinedIcon className={styles.icon} /> </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ className: styles.text }}
                primary={`${t('weekDays.saturday')}`}
                secondary={`${t('withoutTranslations.schedules.saturday')}`}
              />
            </ListItem>

          </List>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} >
        <Box className={styles['grid-section']} >
          <List dense={false}>

            <ListItem>
              <ListItemIcon> <LocalPhoneOutlinedIcon className={styles.icon} /> </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ 
                  component: 'a', 
                  href:`tel:${t('withoutTranslations.info.phones.phoneOne.indicative')}${t('withoutTranslations.info.phones.phoneOne.number')}`, 
                  className: styles.text 
                }}
                secondaryTypographyProps={{ 
                  component: 'a', 
                  href:`tel:${t('withoutTranslations.info.phones.phoneTwo.indicative')}${t('withoutTranslations.info.phones.phoneTwo.number')}`, 
                  className: styles.text 
                }}
                primary={`${t('withoutTranslations.info.phones.phoneOne.formated')}`}
                secondary={`${t('withoutTranslations.info.phones.phoneTwo.formated')}`}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon> <AttachEmailOutlinedIcon className={styles.icon} /> </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ 
                  component: 'a',
                  href: `mailto:${t('withoutTranslations.info.email')}`,
                  className: styles.text 
                }}
                primary={`${t('withoutTranslations.info.email')}`}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon> <LocationOnOutlinedIcon className={styles.icon} /> </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ 
                  component: 'a',
                  href: `${t('withoutTranslations.info.location.googleMaps')}`,
                  target:'_blank',
                  className: styles.text 
                }}
                primary={`${t('withoutTranslations.info.location.formated')}`}
              />
            </ListItem>

          </List>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

FindUs.propTypes = {};

FindUs.defaultProps = {};

export default withTranslation()(FindUs);
