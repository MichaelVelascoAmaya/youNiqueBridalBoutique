import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FloatingHeader.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Fab, Paper } from '@mui/material';
import Image from 'mui-image';
import MenuList from '../../menuComponents/MenuList/MenuList';

const FloatingHeader = ({ anchor }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={ () => setopen(false) }
      >
      <Paper component='header' className={styles.header} square >
        <Image src='images/logo.jpg' width={180} height='auto' duration={0} />
        <MenuList orientation='vertical'
          onClickInTab={ () => setopen(false) } 
          sxTabs={{ maxWidth: 'none' }} 
          sxTabsContent={{ width: '100vw' }}
        />
      </Paper>
      </Drawer>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        onClick={ () => setopen(true) }
      >
        <MenuIcon />
      </Fab>
    </>
  );
};

FloatingHeader.propTypes = {
  anchor: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
};

FloatingHeader.defaultProps = {
  anchor: 'right',
};

export default FloatingHeader;
