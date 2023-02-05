import { Trans } from 'react-i18next';
import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App/App';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';

const rootPath = '/';

const routesDom = createBrowserRouter([
  {
    path: rootPath,
    element: <App />,
    label: <Trans>menuList.home</Trans>,
    icon: <OtherHousesOutlinedIcon />,
    children: [
      {
        path: 'collections',
        element: <div>collections!</div>,
        label: <Trans>menuList.collections</Trans>,
        icon: null,
        children: [
          {
            path: 'collection-one',
            element: <div>collection-one!</div>,
            label: <Trans>menuList.collections</Trans>,
            icon: null,
          },
        ]
      },
      {
        path: "appointment",
        element: <div>appointment!</div>,
        label: <Trans>menuList.appointment</Trans>,
        icon: null,
      },
      {
        path: "contact-us",
        element: <div>contact-us!</div>,
        label: <Trans>menuList.contact-us</Trans>,
        icon: null,
      },
    ],
  },
]);

// get route info by path
const routeByPath = path => routesDom.routes.find(element => element.path === path);

export {
  routesDom,
  rootPath,
  routeByPath,
};