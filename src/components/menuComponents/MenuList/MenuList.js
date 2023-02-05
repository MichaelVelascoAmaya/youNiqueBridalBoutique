import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuList.module.css';
import { Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate  } from 'react-router-dom';
import { routeByPath, rootPath, homePath } from '../../../routes/routesDom';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

const MenuList = ({ orientation, onClickInTab, sxTabs, sxTabsContent }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeTab = location.pathname.slice(1)
  const [value, setValue] = React.useState(routeTab === rootPath ? homePath : routeTab.split('/')[1]);
  const routes = routeByPath(rootPath)?.children ?? []; 
  
  return (
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
            sx={{ ...sxTabs }} 
            label={ route.label }
            icon={ route.icon ?? <DryCleaningIcon /> }
            iconPosition='start'
            value={ `${route.path}` }
            onClick={ () => { navigate(route.path); onClickInTab();  }}
          />
        ))
      }
    </Tabs>
  )
};

MenuList.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  onClickInTab: PropTypes.func,
  sxTabs: PropTypes.object,
  sxTabsContent: PropTypes.object,
};

MenuList.defaultProps = {
  orientation: 'horizontal',
  onClickInTab: () => {},
  sxTabs: {},
  sxTabsContent: {},
};

export default MenuList;
