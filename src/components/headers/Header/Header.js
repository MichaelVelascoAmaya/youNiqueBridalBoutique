import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from 'mui-image';
import { Paper } from '@mui/material';
import MenuList from '../../menuComponents/MenuList/MenuList';

const Header = ({ changeOnSize }) => {
  const theme = useTheme();
  const orientation = useMediaQuery(theme.breakpoints.down(changeOnSize)) ? 'vertical' : 'horizontal';
  return (
    <Paper component='header' className={styles.Header} square >
      <Image src='images/logo.jpg' width={100} />
      <MenuList orientation={ orientation } />
    </Paper>
  );
};

Header.propTypes = {
  changeOnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Header.defaultProps = {
  changeOnSize:'sm'
};

export default Header;
