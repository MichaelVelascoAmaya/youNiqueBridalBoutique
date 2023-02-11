import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import { Container } from '@mui/material';
import Header from '../headers/Header/Header';
import Footer from '../Footer/Footer';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { rootPath } from '../../routes/routesDom'

const App = () => {
  const [containerHeigth, setContainerHeigth] = useState(0);
  const headerRef = useRef();
  const footerRef = useRef();
  const containerRef = useRef();

  const containerCalcHeigth = () => {
    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const footerHeight = footerRef.current?.offsetHeight ?? 0;
    const containerHeight = containerRef.current?.offsetHeight ?? 0;
    const containerCalcHeigth = containerHeight - headerHeight - footerHeight
    setContainerHeigth(containerCalcHeigth);
    return containerCalcHeigth;
  }

  useEffect(() => {
    footerRef.current && (new ResizeObserver(containerCalcHeigth)).observe(footerRef.current);
    headerRef.current && (new ResizeObserver(containerCalcHeigth)).observe(headerRef.current);
    containerRef.current && (new ResizeObserver(containerCalcHeigth)).observe(containerRef.current);
  }, [containerRef, headerRef, footerRef])

  return (
    <Container ref={containerRef} maxWidth={false} disableGutters={true} className={styles.App} data-testid="App" >
      <Header reference={headerRef} changeOnSize={'md'} />
      <Container maxWidth={false} disableGutters={true} className={styles.AppBody} sx={{ height: containerHeigth + 'px' }} >
        {useLocation().pathname.slice(1) === rootPath ? <Navigate to='*' /> : <Outlet />}
      </Container>
      <Footer reference={footerRef} changeOnSize={'md'} />
    </Container>
  );
}

export default App;
