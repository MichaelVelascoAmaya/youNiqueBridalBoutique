import React from 'react';
import PropTypes from 'prop-types';
import styles from './FloatingHeader.module.css';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Fab } from '@mui/material';

const FloatingHeader = ({ anchor }) => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Box className={styles.FloatingHeader}>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Box style={{ padding: 2 }} >
          header  
        </Box>
      </Drawer>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuIcon />
      </Fab>
    </Box>
  );
};

FloatingHeader.propTypes = {
  anchor: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
};

FloatingHeader.defaultProps = {
  anchor: 'right',
};

export default FloatingHeader;
