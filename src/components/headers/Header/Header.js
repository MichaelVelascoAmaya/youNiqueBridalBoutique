import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Header.module.css';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopHeader from '../TopHeader/TopHeader';
import FloatingHeader from '../FloatingHeader/FloatingHeader'

const Header = ({ changeOnSize }) => (
  useMediaQuery(useTheme().breakpoints.up(changeOnSize)) ? <TopHeader /> : <FloatingHeader />
);

Header.propTypes = {
  changeOnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Header.defaultProps = {
  changeOnSize: 'sm'
};

export default Header;
