import React from 'react';
import styles from './App.module.css';
import { withTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import Header from '../headers/Header/Header';
import Footer from '../Footer/Footer';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { rootPath } from '../../routes/routesDom'

const App = ({ t, i18n }) => (
  <Container maxWidth={false} disableGutters={true} className={styles.App} data-testid="App">
    <Header changeOnSize={'md'} />
    <Container maxWidth={false} disableGutters={true} className={styles.AppBody} >
      {useLocation().pathname.slice(1) === rootPath ? <Navigate to='*' /> : <Outlet />}
    </Container>
    <Footer changeOnSize={'md'} />
  </Container>
);

export default withTranslation()(App);
