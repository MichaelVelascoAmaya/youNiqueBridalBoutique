import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuList.module.css';
import { Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate  } from 'react-router-dom';
import { routeByPath, rootPath, homePath } from '../../../routes/routesDom';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { Box } from '@mui/system';
import PopupOption from '../PopupOption/PopupOption';

const MenuList = ({ orientation, onClickInTab, sxTabs, sxTabsContent, otherOptions }) => {
  const navigate = useNavigate();
  const routeTab = useLocation().pathname.slice(1)
  const [value, setValue] = React.useState(routeTab === rootPath ? homePath : routeTab.split('/')[1]);
  const routes = [].concat((routeByPath(rootPath)?.children ?? []), otherOptions); 

  const itemEls = useRef([]);
  const [itemElsState, setTtemElsState] = useState(false);
  useEffect(() => setTtemElsState(true), [itemEls]);
  
  return (
    <Box>
      <Tabs 
        sx={{ ...sxTabsContent }}
        value={value}
        className={ styles.MenuList }
        onChange={ (e, v) => setValue(v) }
        variant='scrollable'
        orientation={orientation}
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >
        {
          routes.map( (route, i) => (
            <Tab key={ `route-${route.path}` }
              ref={(element) => itemEls.current[i] = element}
              sx={{ ...sxTabs }} 
              label={ route.label }
              icon={ route.icon ?? <DryCleaningIcon /> }
              iconPosition='start'
              value={ `${route.path}` }
              onClick={ () => { 
                route.navigateButton && navigate(route.path);
                route.useDefaultActionOnClick && onClickInTab();
              }}
            />
          ))
        }
      </Tabs>
      {
        itemElsState && routes.map( (option, i) => option.popOver ? (
          <React.Fragment key={`popover-menu-${i}`}>
            <PopupOption targetOpen={itemEls.current[i]} openMethod={option.popOver.method} >{option.popOver.component}</PopupOption>
          </React.Fragment>
        ) : <React.Fragment key={i}></React.Fragment> )
      }
    </Box>
  )
};

MenuList.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  onClickInTab: PropTypes.func,
  sxTabs: PropTypes.object,
  sxTabsContent: PropTypes.object,
  otherOptions: PropTypes.arrayOf(
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

MenuList.defaultProps = {
  orientation: 'horizontal',
  onClickInTab: () => {},
  sxTabs: {},
  sxTabsContent: {},
  otherOptions: [],
};

export default MenuList;
