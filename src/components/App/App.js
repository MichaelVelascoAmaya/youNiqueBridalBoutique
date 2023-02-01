import React from 'react';
import styles from './App.module.css';
import { withTranslation } from 'react-i18next';

const App = ({ t, i18n }) => (
  <div className={styles.App} data-testid="App">
    App Component {t('helloWorld')}
  </div>
);

export default withTranslation()(App);
