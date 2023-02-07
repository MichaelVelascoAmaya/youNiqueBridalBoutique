import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { withTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import styles from './LanguagesOption.module.css';

const LanguagesOption = ({ i18n}) => {
  const translateData = i18n.toJSON().store.data;
  return (
    <List className={styles.LanguagesOption}>
      {
        Object.keys(translateData).map( (v) => (
          <ListItem key={`languages-list-${v}`} disablePadding>
            <ListItemButton onClick={ () => i18n.changeLanguage(v) }>
              <ListItemText primary={translateData[v].translation.lang} />
            </ListItemButton>
          </ListItem>
        ) )
      }
    </List>
  );
}

LanguagesOption.propTypes = {};

LanguagesOption.defaultProps = {};

export default withTranslation()(LanguagesOption);
