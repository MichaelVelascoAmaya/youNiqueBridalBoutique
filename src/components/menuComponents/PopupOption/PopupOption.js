import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PopupOption.module.css';
import { Popover } from '@mui/material';

const PopupOption = ({ children, targetOpen, openMethod }) => {
  const [target, setTarget] = useState(null);
  const openPopOver = (target) => setTarget(target);
  const closePopOver = () => setTarget(null);

  switch (openMethod) {
    case 'click':
      targetOpen.onclick = (e) => openPopOver(e.currentTarget)
      break;
    case 'hover':
      targetOpen.onmouseenter = (e) => openPopOver(e.currentTarget)
      break;
  
    default:
      break;
  }

  return (
    <Popover
      className={styles.PopupOption}
      open={Boolean(target)}
      anchorEl={targetOpen}
      onClose={closePopOver}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      PaperProps={{
        onMouseLeave: (e) => { openMethod === 'hover' && closePopOver() }
      }}
    >
      {children}
    </Popover>
  );
}

PopupOption.propTypes = {
  children: PropTypes.node,
  targetOpen: PropTypes.instanceOf(HTMLElement),
  openMethod: PropTypes.oneOf(['click', 'hover']),
};

PopupOption.defaultProps = {
  children: <></>,
  openMethod: 'click'
};

export default PopupOption;
