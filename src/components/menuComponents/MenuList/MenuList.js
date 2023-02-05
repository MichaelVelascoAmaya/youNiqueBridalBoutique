import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuList.module.css';
import { Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate  } from 'react-router-dom';
import { routeByPath, rootPath } from '../../../routes/routesDom';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

const MenuList = ({ orientation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeTab = location.pathname.split('/')[1]
  const [value, setValue] = React.useState(routeTab.length === 0 ? '/' : routeTab);
  const routes = routeByPath(rootPath)
  const routesToTabs = routes?.children ?? [];
  
  return (
    <Tabs 
      value={value}
      className={ styles.MenuList }
      onChange={ (e, v) => setValue(v) }
      variant='scrollable'
      orientation={orientation}
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable auto tabs example"
    >
      <Tab 
        key={ `route-${routes.path}` } 
        label={ routes.label } 
        icon={ routes.icon ?? <DryCleaningIcon /> } 
        iconPosition='start' 
        value={ `${routes.path}` } 
        onClick={ () => navigate(routes.path)}
      />
      {
        routesToTabs.map( (route, i) => (
          <Tab key={ `route-${route.path}` } 
            label={ route.label }
            icon={ route.icon ?? <DryCleaningIcon /> }
            iconPosition='start'
            value={ `${route.path}` }
            onClick={ () => navigate(route.path)}
          />
        ))
      }
    </Tabs>
  )
};

MenuList.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal'])
};

MenuList.defaultProps = {
  orientation: 'horizontal'
};

export default MenuList;
