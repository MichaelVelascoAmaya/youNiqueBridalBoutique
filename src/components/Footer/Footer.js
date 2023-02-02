import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from './Footer.module.css';
import { Fab, Paper } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = ({ changeOnSize }) => {
  const theme = useTheme();
  const [footerBoxOpen, setFooterBoxOpen] = useState(useMediaQuery(theme.breakpoints.up(changeOnSize)));
  return (
    <Paper component="footer" square className={styles.Footer} >
      <Box>
        <Fab className={styles.toggleButton} onClick={ () => setFooterBoxOpen(p => !p) } >
          { footerBoxOpen ? <KeyboardArrowDownIcon className={styles.toggleButtonIcon} /> : <KeyboardArrowUpIcon className={styles.toggleButtonIcon} /> }
        </Fab>
        <Box className={ (footerBoxOpen ? styles.footerBoxOpen : styles.footerBoxClose) + ' ' + styles.footerBox } zIndex={1} bgcolor='white' >
          footer
        </Box>
      </Box>
    </Paper>
  );
};

Footer.propTypes = {
  changeOnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Footer.defaultProps = {
  changeOnSize:'sm'
};

export default Footer;
