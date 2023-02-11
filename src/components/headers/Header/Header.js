import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Header.module.css';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopHeader from '../TopHeader/TopHeader';
import FloatingHeader from '../FloatingHeader/FloatingHeader';

const Header = ({ changeOnSize, reference }) => (
  useMediaQuery(useTheme().breakpoints.up(changeOnSize)) ? <TopHeader reference={reference} /> : <FloatingHeader reference={reference} />
);

Header.propTypes = {
  changeOnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  reference: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLElement),
  }),
};

Header.defaultProps = {
  changeOnSize: 'sm',
  reference: { current: null },
};

export default Header;
