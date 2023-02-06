import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FloatingHeader.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Fab, Paper } from '@mui/material';
import Image from 'mui-image';
import MenuList from '../../menuComponents/MenuList/MenuList';

const FloatingHeader = ({ anchor, otherButtons }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={ () => setopen(false) }
      >
      <Paper component='header' className={styles.header} square >
        <Image src='/images/logo.jpg' width={180} height='auto' duration={0} />
        <MenuList orientation='vertical'
          onClickInTab={ () => setopen(false) } 
          sxTabs={{ maxWidth: 'none' }} 
          sxTabsContent={{ width: '100vw' }}
          otherOptions={otherButtons}
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
  otherButtons: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      element: PropTypes.node,
      label: PropTypes.string,
      icon: PropTypes.node,
      navigateButton: PropTypes.bool,
      useDefaultActionOnClick: PropTypes.bool,
      popOver: PropTypes.shape({
        method: PropTypes.oneOf(['click', 'hover']),
        component: PropTypes.node
      }),
    })
  ),
};

FloatingHeader.defaultProps = {
  anchor: 'right',
  otherButtons: [],
};

export default FloatingHeader;
