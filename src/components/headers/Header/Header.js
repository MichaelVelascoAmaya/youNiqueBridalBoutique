import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Header.module.css';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopHeader from '../TopHeader/TopHeader';
import FloatingHeader from '../FloatingHeader/FloatingHeader';
import i18n from '../../../internationalization/i18n';
import LanguageIcon from '@mui/icons-material/Language';

const Header = ({ changeOnSize }) => {

  const otherButtons  = [
    {
      path:'languages',
      element: <></>,
      label: i18n.language,
      icon: <LanguageIcon />,
      navigateButton: false,
      useDefaultActionOnClick: false,
      popOver: {
        method: 'hover',
        component: <>holi</>
      },
    },
  ];
  
  return (
    useMediaQuery(useTheme().breakpoints.up(changeOnSize)) ? <TopHeader otherButtons={otherButtons} /> : <FloatingHeader otherButtons={otherButtons} />
  );
}

Header.propTypes = {
  changeOnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Header.defaultProps = {
  changeOnSize: 'sm'
};

export default Header;
