import React from 'react';
import styles from './App.module.css';
import { withTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import Header from '../headers/Header/Header';
import Footer from '../Footer/Footer';
import { Outlet  } from "react-router-dom";

const App = ({ t, i18n }) => {
  return (
    <Container maxWidth={false} disableGutters={true} className={styles.App} data-testid="App">
      <Header changeOnSize={'md'} />
      <Container maxWidth={false} disableGutters={true} className={styles.AppBody} >
        <Outlet />
      </Container>
      <Footer changeOnSize={'md'} />
    </Container>
  );
};

export default withTranslation()(App);
