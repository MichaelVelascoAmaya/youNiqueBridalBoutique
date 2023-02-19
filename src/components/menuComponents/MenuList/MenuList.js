import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuList.module.css';
import { Dialog, DialogContent, DialogTitle, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { useLocation, useNavigate  } from 'react-router-dom';
import { routeByPath, rootPath, homePath } from '../../../routes/routesDom';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { Box } from '@mui/system';
import PopupOption from '../PopupOption/PopupOption';
import SocialNetworksMenu from '../SocialNetworksMenu/SocialNetworksMenu';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const idModal = 'MenuListModal';

const exitModal = () => {
  document.getElementById(idModal).parentNode.firstChild.click();
}


const MenuList = ({ orientation, onClickInTab, sxTabs, sxTabsContent, otherOptions }) => {
  const navigate = useNavigate();
  const routeTab = useLocation().pathname.slice(1)
  const [value, setValue] = React.useState(routeTab === rootPath ? homePath : routeTab.split('/')[1]);
  const routes = [].concat((routeByPath(rootPath)?.children ?? []), otherOptions); 

  const itemEls = useRef([]);
  const [itemElsState, setTtemElsState] = useState(false);
  useEffect(() => setTtemElsState(true), [itemEls]);

  const [dialogContent, setDialogContent] = useState({});
  
  return (
    <Box className={ styles.MenuList } 
      sx={{ 
        flexDirection: orientation === 'vertical' ? 'column' : 'row' ,
        px: orientation === 'vertical' ? 0 : 2 
      }} 
    >
      <Tabs 
        sx={{ ...sxTabsContent }}
        value={value}
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
                route.useDialog && setDialogContent({ ...route.useDialog, content: route.element, oldMenuPossition: value })
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

      <SocialNetworksMenu direction={orientation === 'vertical' ? 'row' : 'column'} />

      <Dialog open={(dialogContent !== null && dialogContent !== undefined) && Object.keys(dialogContent).length > 0 } 
        onClose={() => {
          setDialogContent({});
          setValue(dialogContent.oldMenuPossition)
        }}
        sx={{ ...dialogContent.sx }}
        TransitionProps={ { id: idModal } }
        
      >
        <DialogTitle >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={11}>
              <Typography variant='h4' >{dialogContent.title}</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => setDialogContent({})}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          {dialogContent.content}
        </DialogContent>
      </Dialog>
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
      useDialog: PropTypes.shape({
        title: PropTypes.string,
        sx: PropTypes.object,
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

export {
  MenuList,
  exitModal
};
