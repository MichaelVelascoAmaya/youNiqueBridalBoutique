import React from 'react';
import PropTypes from 'prop-types';
//import styles from './Header.module.css';
import FloatingHeader from '../FloatingHeader/FloatingHeader';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopHeader from '../TopHeader/TopHeader';

const Header = ({ changeOnSize }) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(changeOnSize)) ? <FloatingHeader /> : <TopHeader />
};

Header.propTypes = {
  changeOnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Header.defaultProps = {
  changeOnSize:'sm'
};

export default Header;
